import userSchema from "../models/user"

export const register = async (req, res) => {
    try {
        const register = await new userSchema(req.body).save();
        res.json(register)
    } catch (error) {
        res.status(400).json({
            error: "Không đăng kí được!!"
        })
    }
}
export const login = async (req, res) => {
    try {
        const login = await userSchema.findOne({ _email: req.params.email }).exec();
    } catch (error) {
        res.status(400).json({
            error: "Không đăng nhập được!!"
        })
    }
}