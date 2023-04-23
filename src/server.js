const http = require('http');

const PORT = 3000 || process.env.PORT;



const app = require("./app.js")

const  db = require("./models/index.js")

const server = http.createServer(app);






server.listen(PORT, ()=>{console.log(`server is listening at port ${PORT}`)})