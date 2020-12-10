const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const PORT = require('./Config/properties').PORT;
const routes = require('./Routes/index.routes');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

for (let key in routes) {
    let router = express.Router();
    app.use(`/${key}`, router);
    routes[key](router);
}

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on ${process.env.PORT || PORT} port.`);
});