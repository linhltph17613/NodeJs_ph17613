import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto'
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

userSchema.pre("save", function (next) {
    console.log(this.password)
    this.salt = uuidv4()
    console.log("this:", this);
    this.password = this.encryptPassword(this.password)
    next();
})

userSchema.methods = {
    authenticate(password) {
        return this.password == this.encryptPassword(password)
    },
    encryptPassword(password) {
        if (!password) return
        console.log("password", password)
        try {
            return createHmac("sha256", this.salt).update(password).digest("hex")
        } catch (error) {
            console.log("error", error);
        }
    }
}

export default mongoose.model('User', userSchema)