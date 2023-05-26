const db = require('../models')
const mustacheRenderer = require('mustache')
const path = require('path')
const fs = require('fs/promises')
const puppeteer = require('puppeteer')

const html = async (uuidDocument) => {
    var response = await db.document.findOne({
        where: {
            uuid: uuidDocument
        },
        order: [['id','DESC']]
    })

    var view = {}

    var filename = path.join(__dirname, 'template.html');
    var template = await fs.readFile(filename,{encoding:'utf8'});
    var mustache = mustacheRenderer.render(template,view)

    const browser = await puppeteer.launch();
    const page = await browser.newPage()

    await page.setContent(mustache)
    await page.emulateMediaFeatures('screen')
    await page.pdf({
        path:`./public/${uuidDocument}.pdf`,
        format:'A4',
        printBackground:true
    })

    await browser.close()

    console.log(mustache);
}

module.exports = {
    html
}