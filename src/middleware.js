const logRequest = (req, res, next) => {
    const nowTime = new Date(Date.now())
    console.log(`${nowTime.toLocaleString('sv-SE')} -> ${req.method} : ${req.url}`)
    next()
}
module.exports = { logRequest }