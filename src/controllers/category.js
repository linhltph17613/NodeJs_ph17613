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