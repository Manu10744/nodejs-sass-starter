const express = require("express");
const router = require("./routes/routes");

const app = express();

app.set("view engine", "ejs");
app.use(router);

const PORT = 5050 || process.env.PORT;
app.listen(PORT, () => { console.log(`Application has been started at http://localhost:${PORT}`); })