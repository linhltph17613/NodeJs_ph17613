import mongoose, { Schema } from "mongoose";
const producSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })
export default mongoose.model('Product', producSchema)