class ApiDoc {

    getApiDoc(req, res) {
        res.sendFile(__dirname + '/index.html')
    }
}

module.exports = new ApiDoc()