const express = require('express')
const mongoose = require('mongoose')
const Feedback = require('./schema.js')
const cors = require('cors')
const path = require('path')


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

console.log(path.resolve(__dirname, './profile/build'))
app.use(express.static(path.resolve(__dirname, './profile/build')))

mongoose.connect('mongodb+srv://general:F@tima2013@cluster0.pi4v3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to the database')
});



app.get('/api/get', (req, res)=>{
    Feedback.find().then((data)=>{
        res.status(200).json(data)
    })
    
})
app.post('/api/post', (req,res)=>{
    console.log(req.body)
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const str = dd + '/' + mm + '/' + yyyy;
    const fb = new Feedback({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text,
        date: str
    })
    fb.save()
    console.log('new item was created')
    res.status(200).json({
        message: "Successfully created an item", 
        item: {name: req.body.name,
            email: req.body.email,
            text: req.body.text,
            date: str
        }
    })
})

app.listen(3001)