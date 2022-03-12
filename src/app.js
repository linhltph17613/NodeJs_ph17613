import express from "express";
import cors from 'cors';
import productRouter from './routers/products';
import morgan from "morgan";

const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

//router
app.use("/api", productRouter)

const PORT = 3002;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng", PORT);
})