import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;

const producSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true

    },
    demensions: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true })
export default mongoose.model("product", producSchema)