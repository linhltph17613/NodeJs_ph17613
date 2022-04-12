import express from "express";
import cors from 'cors';
import morgan from "morgan";
import mongoose from "mongoose";


import productRouter from './routers/products';
import userRouter from './routers/user';
import categoryRouter from "./routers/category";
import SwaggerUI from 'swagger-ui-express';
import YAML from 'yamljs'

const app = express();
const swaggerJSDocs = YAML.load('./api.yaml')
//middleware
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())
app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerJSDocs))

//router
// readdirSync(`${__dirname}/routers`).map(file => app.use("/api", require(`./routers/${file}`)))
app.use("/api/products", productRouter)
app.use("/api", userRouter)
app.use("/api", categoryRouter)


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
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng", PORT);
})