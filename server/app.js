import express from "express"

const app = express()

const PORT = 5002;

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello world"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.get("/add/:id",(req,res)=>{
    try {
        let userData = req.params.id
        console.log(userData);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
    }
})

app.get("/add/:num1/:num2",(req,res)=>{
    try {
        let userInput1 = req.params.num1
        let userInput2 = req.params.num2
        let userinput3 = Number(userInput1) + Number(userInput2)
        console.log(userinput3);
        res.status(200).json(userinput3)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


app.get("/check/:year",(req,res)=>{
    try {
        let userData = req.params.year
        if (userData % 2== 0) {
            console.log(userData);
            res.status(200).json("the number is even");
        } else {
            res.status(200).json("the number is odd");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    };
})
app.listen(PORT,()=>{
    console.log(`the server is up and running ${PORT}`);
})