import userSchema from "../models/user"
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    const { email, name, password } = req.body
    console.log(req.body);

    try {
        const exitUser = await userSchema.findOne({ email }).exec();
        if (exitUser) {
            res.status(400).json({
                message: "Tài khoản đã tồn tại!"
            });
            return;
        }
        const user = await new userSchema({ email, name, password }).save()
        console.log(user)

        res.status(200).json(user)
        // return;
    } catch (error) {
        // console.log(error)
        res.status(400).json({
            error: "Không đăng kí được!!"
        })
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userSchema.findOne({ email }).exec();
        if (!user) {
            res.status.json({
                message: "Email không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status.json({
                messgage: "Mật khẩu không đúng!"
            })
        }
        const token = jwt.sign({ _id: user._id }, "19112002", { expiresIn: '1h' })
        res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).json({
            error: "Không đăng nhập được!!"
        })
    }
}
export const list = async (req, res) => {
    try {
        const users = await userSchema.find({}).exec();
        res.json(users)
    } catch (error) {
        res.status(400).json({
            error: "Không có danh sách user"
        })
    }
}
export const remove = async (req, res) => {

    // res.json(data.filter(item => item.id != req.params.id))
    try {
        const user = await userSchema.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Xóa người dùng thành công"
        })
    }
}