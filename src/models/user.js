import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: Number,
        required: true
    }
}, { timestamps: true })
export default mongoose.model('User', userSchema)