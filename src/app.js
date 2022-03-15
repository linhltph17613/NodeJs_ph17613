import express from "express";
import cors from 'cors';
import productRouter from './routers/products';
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

//router
app.use("/api", productRouter)
//connection db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi db thanh cong!"))
    .catch(error => console.log(error))
const PORT = 3002;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng", PORT);
})