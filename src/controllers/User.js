import userSchema from "../models/user";

export const userById = async (req, res, next, id) => {
    try {
        const user = userSchema.findById(id).exec()
        if (!user) {
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        res.profile = user;
        res.profile.password = undefined;
        next()
    } catch (error) {
        console.log("error");
    }
}       