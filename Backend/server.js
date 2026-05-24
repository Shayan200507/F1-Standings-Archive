import express from "express";
import {apiRouter} from "./routers/ApiRouter.js"

const Port =  8000

const app = express()


app.use("/api",apiRouter)


app.use((req,res)=>{

  res.status(404).json({

     error: "request not found"

  })

})


app.listen(Port,()=>{console.log(`port connnected: ${Port}`)}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 
