import express from "express";
import cors from 'cors';
import productRouter from './router/products';
import morgan from "morgan";

const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'))

//router
app.use("/api", productRouter)