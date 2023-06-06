const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

/* This code is configuring the storage engine to be used by Multer, a middleware for handling file
uploads in Node.js. */
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") { 
      callback(null, name + Date.now() + "." + extension);
    } else {
      callback(new Error('Only .png, .jpg and .jpeg format allowed!'), false);
    }
  },
});

module.exports = multer({ storage: storage }).single("image"); 