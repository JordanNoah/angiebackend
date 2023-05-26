const {
    v4: uuidv4
} = require('uuid')
const mustache = require('mustache')
const db = require('../models')

const {html} = require('../views/index')

const createDocument = async () => {
    var response = await db.document.create({uuid:uuidv4()})
    var viewsResponse = await html(response.uuid)
    return response
}

const updateDocument = async () => {

}

const deleteDocument = async () => {

}

const getDocument = async () => {

}

const getAllDocuments = async () => {

}

module.exports = {
    createDocument,
    updateDocument,
    deleteDocument,
    getDocument,
    getAllDocuments
}