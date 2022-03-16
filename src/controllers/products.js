import mongoose from "mongoose";
const Product = mongoose.model('Product', { name: String });

//kake data
// const data = [
//     { id: 1, name: "product 1" },
//     { id: 2, name: "product 2" },
//     { id: 3, name: "product 3" }

// ]

export const create = async (req, res) => {
    // data.push(req.body);
    // console.log(data);
    // res.json(data);
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm đc sản phẩm"
        })
    }

}
export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}
export const getAll = async (req, res) => {

    // res.json(data.find(item => item.id == req.params.id))
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}
export const remove = async (req, res) => {

    // res.json(data.filter(item => item.id != req.params.id))
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm thành công"
        })
    }
}
export const update = async (req, res) => {

    // const result = (data.find(item => item.id == req.params.id ? req.body : item))
    // res.json(result)
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const product = await Product.findOneAndUpdate({ condition, update }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Sửa sản phẩm thành công"
        })
    }
}