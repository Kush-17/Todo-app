 const express = require('express');
 const { createTodo, updateTodo } = require('./types');
 const { todo } = require('./db');
 const cors = require("cors");
 

 const app = express()
 

 const PORT = 3000


 app.use(express.json()) 
 app.use(cors())

 app.post('/todo' , async (req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    //console.log(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg : 'You sent the wrong inputs'
        })
        return
    }
    // put it on mongodb
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    //console.log(todo);
    res.json({
        msg : 'Todo created'
    })

 })

 app.get('/todos', async(req,res)=>{
    const todos = await todo.find({})       /// for showing all todos
        res.json({
            todos
        })
    
 })

 app.put('/completed', async(req,res)=>{
     const updatePayload = req.body
     const parsedPayload = updateTodo.safeParse(updatePayload)
     if(!parsedPayload.success){
        res.status(411).json({
            msg : 'You sent the wrong inputs'
        }) 
        return
    }

    await todo.update({
        _id : updatePayload._id
    },{
        completed : true
    })
    res.json({
        message : 'Todo updated'
    })
 })


 app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
 })
