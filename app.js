const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = require('./Config/properties').PORT;
const routes = require('./Routes/index.routes');

app.use((request, response, next) => {
    const allowedOrigins = ["http://localhost:4200"];
    const origin = request.headers.origin;
    if (allowedOrigins.includes(origin)) {
        response.header("Access-Control-Allow-Origin", origin);
    }
    response.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    response.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

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