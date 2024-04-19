const { uploadSingleFile } = require("../services/fileServices");

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    image = req.files.image;
    let result = await uploadSingleFile(image);
    res.status(200).json({
        error: 0,
        data: result
    });
}

module.exports = {
    postUploadSingleFile
}