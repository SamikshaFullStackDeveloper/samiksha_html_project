// // IMPORTING HTTP MODULE
// const katol = require("http");

// // CREATE SERVER
// let sam = katol.createServer((request, response)=>{
//   response.write("<h1>Hello World</h1>");
//   response.end();
// });

// // SPECIFY ADDRESS AND PORT
// const address = "127.0.0.1";
// const port = 4000;

// // LISTENING TO PORT
// sam.listen(port, address,()=>{
//   console.log("server is running at http:/" + address + ":" + port);
// });


// IMPORTING HTTP MODULE
let x = 9;

if (x % 3 == 0) 
{
  console.log("even");
}
else {
  console.log("odd");
} 