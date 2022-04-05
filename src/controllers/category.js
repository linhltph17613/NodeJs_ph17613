import CategoryModel from "../models/category"
import producSchema from "../models/product"


export const Create = async (req, res) => {
    try {
        const category = await new CategoryModel(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được!"
        })
    }
}
export const list = async (req, res) => {
    try {
        const category = await CategoryModel.find({}).exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: "Không có danh mục sản phẩm"
        })
    }
}
export const remove = async (req, res) => {

    // res.json(data.filter(item => item.id != req.params.id))
    try {
        const category = await CategoryModel.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Xóa danh mục sản phẩm thành công"
        })
    }
}
export const update = async (req, res) => {

    // const result = (data.find(item => item.id == req.params.id ? req.body : item))
    // res.json(result)
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const category = await CategoryModel.findOneAndUpdate({ condition, update }).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Sửa danh mục sản phẩm thành công"
        })
    }
}
export const read = async (req, res) => {
    const condition = { _id: req.params.id }

    try {
        const category = await CategoryModel.findOne({ condition }).exec()
        const products = await producSchema.find({ category }).exec()
        res.json({
            category, products
        });
    } catch (error) {

    }
}