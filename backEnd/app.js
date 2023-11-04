import express from "express";
import config from "config"
import "./utils/dbConnect.js"
import userRouter from "./controllers/User/index.js"

const app=express();

const PORT =config.get("PORT")
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Hello Server is Running 🚀");
})

app.use("/user",userRouter)

app.use((req, res, next) => {
    res.status(404).send("Not Found -Invalid Route");
    next();
  });
app.listen(PORT,(req,res)=>{
    console.log(`Server is Runnig at Port ${PORT}🚀`);
    
})