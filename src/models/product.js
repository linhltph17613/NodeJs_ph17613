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
    },
    weight: {
        type: Number,

    },
    demensions: {
        type: String,
    },
    category: {
        type: ObjectId,
        ref: "Category",
    }
}, { timestamps: true })
export default mongoose.model("product", producSchema)