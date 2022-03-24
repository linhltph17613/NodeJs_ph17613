import productSchema from "../models/product"


export const create = async (req, res) => {
    try {
        const product = await new productSchema(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được!"
        })
    }
}
export const list = async (req, res) => {
    try {
        const products = await productSchema.find().exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            error: "Không có danh sách sp "
        })
    }
}
export const read = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const product = await productSchema.findOne(condition).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không có danh sách sp "
        })
    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const product = await productSchema.findOneAndRemove(condition).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không xóa đượcc "
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const body = req.body
    const option = { new: true }
    try {
        const product = await productSchema.findOneAndUpdate(condition, body, option).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không sửa được "
        })
    }
}