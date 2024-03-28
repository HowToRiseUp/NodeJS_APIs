const express = require("express");
const app = express();
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const router = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 3010;
// //congig template engine
configViewEngine(app);

// default options
app.use(fileUpload());

// // Cho cai req chay thoi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 'self running' function
(async () => {
  try {
    await connection()
    app.listen(port, () => {
      console.log(`Example app listening on porcct http://localhost:${port}`);
    });

  } catch (error) {
    console.log('Vai lon: ', error);
  }
})()

app.use("/", router);
