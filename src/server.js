const http = require('http');
const PORT = 3000 || process.env.PORT;
console.log("Indie server.js")
const app = require("./app.js")

const  db = require("./models/index.js")
console.log("imported model/index")
const server = http.createServer(app);






server.listen(PORT, ()=>{console.log(`server is listening at port ${PORT}`)})