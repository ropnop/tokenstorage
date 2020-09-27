const { v4: uuidv4 } = require('uuid');
const cookie = require('cookie');

module.exports = async (req, res) => {
    const token = uuidv4();
    if (req.query.method == "cookie") {
        res.setHeader('Set-Cookie', cookie.serialize("token", token, {
            path: "/",
            sameSite: true,
            httpOnly: true,
        }))
    }
    res.json({
        "message": "success",
        "token": token
    })
}