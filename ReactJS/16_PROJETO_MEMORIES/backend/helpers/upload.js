const multer = require("multer");
const path = require("path");

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Filter files to accept only JPEG and PNG images
const filterFiles = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Create the multer upload instance
const upload = multer({
  storage: storage,
  fileFilter: filterFiles,
});

module.exports = upload;
