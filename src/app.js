import express from "express";
import cors from 'cors';
import productRouter from './routers/products';
import userRouter from './routers/user';

import morgan from "morgan";
import mongoose from "mongoose";
import { readdirSync } from 'fs';
import path, { dirname } from 'path';



const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

//router
// readdirSync(`${__dirname}/routers`).map(file => app.use("/api", require(`./routers/${file}`)))
app.use("/api", productRouter)
app.use("/api", userRouter)

// readdirSync(__dirname + "/routes").forEach((fileName) => {
//     import("./routes/" + fileName)
//         .then(({ default: router }) => router.default)
//         .then((router) => {
//             app.use("/api", router);
//         });
// });

//connection db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi db thanh cong!"))
    .catch(error => console.log(error))
const PORT = 3002;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng", PORT);
})