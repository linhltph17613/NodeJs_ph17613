import mongoose from "mongoose";
import producSchema from '../models/product'
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
        const product = await new producSchema(req.body).save();
        console.log(product);
        res.json(product)
    } catch (error) {
        console.log("error", error)
        res.status(400).json({
            error: "Không thêm đc sản phẩm" + error
        })
    }

}
export const list = async (req, res) => {
    try {
        const product = await producSchema.find({}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}
export const getAll = async (req, res) => {
    console.log(req.params.id);

    // res.json(data.find(item => item.id == req.params.id))
    try {
        const product = await producSchema.findOne({ _id: req.params.id }).exec();
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
        const product = await producSchema.findOneAndDelete({ _id: req.params.id }).exec();
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
    const condition = { _id: req.params.id }
    const update = req.body;
    try {
        const product = await producSchema.findOneAndUpdate(condition, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Sửa sản phẩm thành công"
        })
    }
}

export const SearchPro = async (req, res) => {
    // console.log(req.query);
    // const product_search = req.query.name // lấy giá trị của key name trong query parameters gửi lên
    // console.log(2);
    try {
        const result = await producSchema

            .find({
                name: {
                    $regex: new RegExp(req.query.q)
                }
            })
        res.json(result);
    } catch (error) {
        console.log("lỗi", error);

    }

}
export const PaginationProduct = async (req, res) => {
    const perPage = 6; // số lượng sản phẩm xuất hiện trên 1 page
    const page = req.params.page || 1;
    console.log(page);

    const Product = producSchema;
    // console.log(Product);
    try {
        await Product
            .find() // find tất cả các data
            .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
            .limit(perPage)
            .exec((err, products) => {
                Product.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                    if (err) return next(err);
                    res.send(products) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
                });
            });
    } catch (error) {
        console.log("lỗi", error);
    }
}
// const Pagination = async (req, res, next) => {
//     const perPage = 6; // số lượng sản phẩm xuất hiện trên 1 page
//     const page = req.params.page || 1;
//     console.log(page);

//     const Product = producSchema;
//     // console.log(Product);
//     try {
//         await Product
//             .find() // find tất cả các data
//             .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
//             .limit(perPage)
//             .exec((err, products) => {
//                 Product.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
//                     if (err) return next(err);
//                     res.send(products) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
//                 });
//             });
//     } catch (error) {
//         console.log("lỗi", error);
//     }

// };