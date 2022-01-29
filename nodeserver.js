//1. import http module 
const http = require("http");
http.createServer((req, res) => { res.end("hello word to server 3100") }).listen(3100);
console.log("server is working");

// two types of modules. 1. core modules, which are part of node JS packages. 2. external modules/packages
// which are not part of core module, we wil install packages from NPM(package server, Node Package Manager)
// Node Package Manager allows us to work with external packages. 
