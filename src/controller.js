const db = require('./db.js')
const { selectBooks } = require('./model.js')

const getData = async (req, res) => {
    try {
        const data = await db(selectBooks())
        res.send({ data })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports = { getData }