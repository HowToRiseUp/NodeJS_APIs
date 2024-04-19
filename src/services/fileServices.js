const fileUpload = require('express-fileupload');
const path = require('path');


const uploadSingleFile = async (fileObject) => {
    try {
        const timestamp = Date.now();
        const newFileName = `${timestamp}_${fileObject.name}`;
        const uploadDir = 'uploads/';
        const uploadPath = path.join(__dirname, '..', uploadDir, newFileName);
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: newFileName,
            error: null
        }
    } catch (error) {
        return {
            status: 'fail',
            path: null,
            error: error
        }
    }
}

module.exports = {
    uploadSingleFile
}