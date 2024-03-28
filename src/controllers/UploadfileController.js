const { uploadSingleFile } = require("../services/fileServices");

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // Post by Form
    image = req.files.image;
    console.log("🚀 ~ postUploadSingleFile ~ image:", image)
    let result = await uploadSingleFile(image);
    console.log("🚀 ~ postUploadSingleFile ~ result:", result)
    res.send('image uploaded!');
}

module.exports = {
    postUploadSingleFile
}