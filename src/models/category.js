import mongoose, { Schema } from "mongoose";
const CategoryModel = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        unique: true

    }
}, { timestamps: true })
export default mongoose.model("Category", CategoryModel)