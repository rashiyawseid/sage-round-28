const express = require('express')

const app = express()

app.use(express.json())

let books = [
    {
        id:1,
        title: "48 laws of power",
        author: "abebe",
        price: "$400"
    },
    {
        id:2,
        title: "Think and Grow Rich",
        author: "sara",
        price: "$200"
    }

];

app.get('/books',(req,res)=>{

    return res.status(200).json(books)
})

app.post('/books',(req,res)=>{
    const book = req.body
    book.id = books.length + 1
    books.push(book)
    return res.status(201).json(book)
})

app.put('/book/:id',(req,res)=>{
    const book = books.find((b)=>b.id ==req.params.id)
    book.title=req.body.title
    book.author =req.body.author
    book.price =req.body.price
    if(!book){}
    return res.status(200).json(book)
})

app.delete('/book/:id',(req,res)=>{
    books = books.filter((b)=>b.id = req.params.id)

   return res.status(200).json({message:"book deleted"})
})    

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})