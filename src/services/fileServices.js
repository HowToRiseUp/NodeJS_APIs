const fileUpload = require('express-fileupload');


const uploadSingleFile = async (fileObject) => {

    try {
        const uploadPath = __dirname + fileObject.name;
        await fileObject.mv(uploadPath); return {
            status: 'success',
            path: 'linksau nay',
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