const cookie = require('cookie');

module.exports = async (req, res) => {
    cookieToken = req.cookies['token'];
    res.setHeader('Set-Cookie', cookie.serialize("token", '', {
        maxAge: -1,
        path: "/",
        sameSite: true,
        httpOnly: true,
    }))
    res.send(`Cookie ${cookieToken} unset!`);
}