const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({

    // Место в хранилище где лежит файл
    destination: function (req, file, cb) {
        cb(null, './server/uploads')
    },

    // Название файлов в хранилище
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const express = require('express');

const fileFilter = (req, file, cb) => {

    if (file.mimetype === "image/png" ||
        file.mimetype === "image/webp" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/svg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true)
    } else {
        cb(null, false)
    }
};

const upload = multer({storage: storage, fileFilter: fileFilter}).single('file');

class FileManager {

    uploadFile(req, res) {
        upload(req, res, function (err) {
            let fileData = req.file;

            if (!fileData) res.send({status: "upload error"});
            else res.send({status: "success"})
        })
    }

    getImage(req, res) {
        const file = `../elsu/server/uploads/${req.query.file}`;
        res.download(file)
    }
}

module.exports = new FileManager();
