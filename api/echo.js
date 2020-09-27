module.exports = async (req, res) => {
    let message = "";
    headerToken = req.headers['authorization'];
    cookieToken = req.cookies['token'];
    success = headerToken || cookieToken ? true : false;
    if (success) {
        message += "Authorized! Server got token(s):"
        if (cookieToken) {
            message += `\nVia cookie: ${cookieToken}`
        }
        if (headerToken) {
            message += `\nVia header: ${headerToken}`
        }
        res.send(message)
    } else {
        res.send("Unauthorized! Server didn't get any tokens!")
    }
}