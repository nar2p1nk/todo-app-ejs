import express from "express";
import sqlite3 from "sqlite3";
const ejs = require('ejs')
const app: express.Application = express();
const db = new sqlite3.Database('database.db',(err)=>{
    if(err){console.error(err.message)}})
const port:number = 8080;

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    db.all('SELECT * FROM todos',(err,row)=>{

    
    res.render('index.ejs',{data:row})
})
});

app.post('/',(req,res)=>{
    const PTodo:any = req.body.todo
    console.log(PTodo);
    db.run('INSERT INTO todos(todo) VALUES(?)',[PTodo])
    res.redirect('/')
})

app.post('/check',(req,res)=>{
    const ids:any = req.body.todo
    var number:any;
    for(number in ids){
        db.run(`DELETE FROM todos WHERE id is ?`,[ids[number]],(err)=>{
            
        })
        console.log(`deleted row ${ids[number]}`);
    }
    res.redirect('/')
})

app.listen(port,()=>{console.log(`TypeScript with Express at https://localhost:${port}/`)
;})
