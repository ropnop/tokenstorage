const { v4: uuidv4 } = require('uuid');
const cookie = require('cookie');

module.exports = async (req, res) => {
    const token = uuidv4();
    if (req.query.method == "cookie") {
        res.setHeader('Set-Cookie', cookie.serialize("token", token, {
            path: "/",
            sameSite: true,
            httpOnly: true,
            secure: true,
            maxAge: 60*60*24 //24 hours
        }))
    }
    res.json({
        "message": "success",
        "token": token
    })
}