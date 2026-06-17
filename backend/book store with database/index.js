import express from'express'
import mongoose, { Query } from 'mongoose'
import { Book } from './model/book.js'
const app =express()

mongoose.connect('mongodb://localhost:27017/bookstore')
.then(()=>console.log("mongodb connected"))
.catch(err=> console.error("something error",err))

app.use(express.json())


app.get('/books',async(req,res)=>{
    const books =await Book.find()
    return res.status(200).json(books)
})
app.get('/books/search',async(req,res)=>{
    const books =await Book.find({publicationyear:{$gte: req.query.year}})
    return res.status(200).json(book)
})

app.get('/books/:id',async(req,res)=>{
    try{
        const books =await Book.find(req.params.id)
         return res.status(200).json(book)
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"internal server error"})
    }
})


app.post('/books',async(req,res)=>{
 const book =new Book(req.body)
 await book.save()
 return res.status(201).json(book)
})

app.put('/books/:id',async(req,res)=>{
    const books =await Book.findByIdAndUpdate(req.params.id, req.body,{new:true})
     return res.status(200).json(books)
})

app.delete('/books/:id',async(req,res)=>{
    await Book.findByIdAndUpdate(req.params.id)
     return res.status(200).json({message:"Book Deleted"})
})
app.listen(3000,()=>{
    console.log("server startedon port 3000")
})