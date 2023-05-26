var express = require("express")
var router = express.Router()
var { getDocuments, createdDocument } = require('../controllers/documents')

router.get("/getAllDocuments", getDocuments)
router.post("/createDocument", createdDocument)

module.exports = router