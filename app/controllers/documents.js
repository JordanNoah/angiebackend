const {httpError} = require('../helpers/handleError')
const {createDocument} = require('../services/documents')

const getDocuments = (req, res) => {
    
}

const createdDocument = async (req, res) => {
    try {
        var response = await createDocument()
        res.status(200).json({uuid:response})
    } catch (error) {
        httpError(res,error)
    }
}

module.exports = { getDocuments,createdDocument } 