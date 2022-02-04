import express from "express";
const ejs = require('ejs')
const app: express.Application = express();
const data = require('./data.json').todos;
const port:number = 8080;

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs',{data:data})
});
var todos:string;
for(todos in data){console.log(data[todos].todo);
}

app.listen(port,()=>{console.log(`TypeScript with Express at https://localhost:${port}/`)
;})
