// let http = require("http");

// let server = http.createServer((req, res) => {
//   if (req.url === "/users") {
//     res.end("me users me hu");
//   }

//   if (req.url === "/home") {
//     res.end("me home me hu");
//   }

//   if (req.url === "/auth") {
//     res.end("me auth me hu");
//   }
// });

// server.listen(3000, () => {
//   console.log("the server is running on port 3000");
// });

const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("okk got it")
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})
