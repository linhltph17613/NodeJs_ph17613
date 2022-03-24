import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors"
import productRoute from "./router/product"

const app = express();
//middleware
app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())


//router
app.use("/api", productRoute)

//connect
mongoose.connect("mongodb://localhost:27017/demo_node")
    .then(() => console.log("Kết nối thành công"))
    .catch(error => console.log("error"))

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Đã kết nối thành công cổng", PORT);
})
// console.log('1');