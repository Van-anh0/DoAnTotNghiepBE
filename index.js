import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import cvsRoute from "./routes/CV.js"
import cookieParser from "cookie-parser"
import cors from "cors"
///haha update nè
const app = express()
dotenv.config()

//ket noi voi mongo atlas
const connect = async() => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB.")
      } catch (error) {
        throw error;
    }
}

//ket noi voi mongo localhost
// const url = "mongodb://localhost:27017/createCVwebsite"
// const connect = async() => {
//     mongoose.set('strictQuery', false);
//     mongoose.connect(url, {})
//     .then(result => console.log("Connect to mongoDB."))
//     .catch(err => console.log(err))
// }



mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

app.use(cookieParser())


//Now try to make your api call on the client side and it should work
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// app.get("/user", (req, res) => {
//     res.send("hello user")
   
// })
app.get("/", (req, res) => {
    res.send("hello first request!")
   
})


app.use(express.json())


app.use("/api/auth", authRoute)
app.use("/api/user", usersRoute)
app.use("/api/cv", cvsRoute)


//lắng nghe ở port 5000: ở đây cho bất cứ port nào cũng được, miễn là chưa có ứng dụng nào khác chạy
app.listen(5000, ()=> {
    connect()
    console.log("Connect to backend.");
})