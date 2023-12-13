import  express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import ArticleRouter from './Routes/ArticleRoute.js';
import UserRouter from './Routes/UserRoute.js'

dotenv.config()
const app = express();

var corOptions = {
  origin: 'http://localhost:80'
}


//middleware
app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true}))


//middlewear function//

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//testing api
app.get("/",(req, res) =>{
  res.json({message:'hello from api'})
})

//Routes configuration

app.use("/api/Article",ArticleRouter)
app.use("/api/User",UserRouter)


app.listen (process.env.PORT ,()=>{
    console.log("server listening on port",process.env.PORT);
})
