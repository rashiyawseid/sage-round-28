import express from "express";
import mongoose from "mongoose";
import { User } from "./model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express()

mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log("mogngodb connected!"))
    .catch((err) => console.log(err))

app.use(express.json())

app.post('/signup', async (req, res) => {
    try {
        const user = req.body
        const existinguser = await User.find({ userName: user.userName })
        if (existinguser.length != 0) {
            return res.status(400).json({ message: "user name already taken!" })
        }
        const hashedpassword = await bcrypt.hash(user.password, 10)
        const newuser = new User({
            fullName: user.fullName,
            userName: user.userName,
            password: hashedpassword
        })
        await newuser.save()
        return res.status(201).json({ message: "Account Created!" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error!" })
    }

})


app.post('/login', async (req, res) => {
    const { userName, password } = req.body
    const user = await User.findOne({ userName: userName })
    if (!user) {
        return res.status(400).json({ message: "Incorrect user name or passeword" })
    }
    console.log(user)
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ message: "Incorrect user name or passeword!" })
    }
    const token = jwt.sign({ id: user.id, fullName: user.fullName, userName: user.userName, role: "admin" }, "123")
    return res.status(200).json({
        message: "login complited!",
        token: token
    })

})
app.get( '/books', auth, (req, res, next) => {
    return res.status(200).json(
        { message: "this is list of books for authorized user.your name is:" + req.user.fullName })

})


function auth(req, res, next) {
    const token = req.headers['authorization']?.split(" ")[1]
    console.log(token)
    if (!token) return res.status(300).json({ message: "not authorized!" })
    jwt.verify(token, "123", (err, decoded) => {
console.log(err)
        if (err) return res.status(400).json({ message: "invalid token!" })
        req.user = decoded
        next()
    })
}



app.listen(3000, () => {
    console.log("server started on port 3000!")
})