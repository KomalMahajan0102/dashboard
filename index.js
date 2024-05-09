const express=require('express');
const app=express();

app.listen(4000,()=>{
    console.log("Server is listening on port");
})
app.use(express.static('public'));
