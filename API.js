const express = require('express');
const getdata = require('./mongodb');
const { name } = require('./app');

const app = express();

app.use(express.json());

app.get('/',async (req,resp)=>{
    let data = await getdata();
    let response = await data.find().toArray();
    resp.send(response);
});

app.post('/',async (req,resp)=>{
    let data = await getdata();
    data = await data.insertOne(req.body);
    resp.send({name:"ashok"})
});

app.put('/:name',async (req,resp)=>{
    let data = await getdata();
    data = await data.updateOne(
        {model: req.params.name},
        {$set:req.body}
    )
    });
    


app.delete("/:model",async (req,resp)=>{
    let data = await getdata();
    data = await data.deleteOne({model:req.params.model})
})

app.listen(5000);
