//kake data
const data = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" }

]
export const list = (req, res) => {

    res.json(data)
}
export const create = (req, res) => {
    data.push(req.body);
    // console.log(data);
    res.json(data);

}
export const get = (req, res) => {

    res.json(data.find(item => item.id == req.params.id))
}
export const remove = (req, res) => {

    res.json(data.filter(item => item.id != req.params.id))
}
export const update = (req, res) => {

    const result = (data.find(item => item.id == req.params.id ? req.body : item))
    res.json(result)
}