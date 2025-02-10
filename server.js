const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
})


app.use(express.json());


app.post('/',(req,res)=>{
    const{Username,Email,Password,DateofBirth}=req.body;
    if(!Username)
        return res.status(400).json({message:'Username cannot be empty'})
    if(!Email)
        return res.status(420).json({message:'Email cannot be empty'})
    if(length(Password)<=8 || length(Password)>16)
        return res.status(440).json({message:'Password length cannot should be greater than 8 or less than or equal to 16'})


})

app.listen(9988,() => {
       console.log('server is running on http://localhost:9988')
});