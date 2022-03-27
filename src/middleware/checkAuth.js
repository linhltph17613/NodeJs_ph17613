import expressJWT from 'express-jwt';

const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        console.log('bai bai');
    }
}

export const requireSignin = expressJWT({
    algorithms: ['HS256'],
    secret: "19112002",
    requestProperty: "auth" // req.auth
})

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id
    if (!status) {
        res.status(401).json({
            message: "Bạn không có quyền truy cập"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        res.status(400).json({
            message: "Bạn không phải là admin"
        })
    }
}


export default checkAuth;