const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        console.log('bai bai');
    }
}
export default checkAuth;