import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import {app} from "./app.js"

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`Server is up and running at PORT :${process.env.PORT}`)
    })
})
.catch((error) =>{
    console.log("MongoDB connection error",error)
})