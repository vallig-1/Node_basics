//console.log("getting started with nodejs")

//SUM
// function sum(a,b){
//     return a+b;
// }
// const total = sum(10,20);
// console.log(total);
// console.log("Smarttttt!!");

//With npm, we dont have to execute file everytime we make changes, it automatically gets updated the moment you change anything in the code

//Node js IMPORT EXPORT
//When you start building an application, you will end up writing a lot more code 
//It is always a good idea to modularise your code frtom the very beginning
//Let us separate this 'sum' method to a file called helpers
//In node, each file you created is called a module

//In helpers.js, we exported, here we have to import file
//M1 
// const helpers= require("./helpers")
//const total = helpers.sum(190,20);
//M2
// const {sum} = require("./helpers");
// const total = sum(190,20);
// console.log(total);
// //console.log(module);

//USING NATIVE MODULES
//Nodejs offers a wode variety of functionalities.
//We can use core nodejs modules using the same require() func..
//Lets use http module that comes with the nodejs.. With this module, we can create server from scratch

// const http= require("http");
// const server = http.createServer(function(req,res){
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.end("Woahh.. Works.. Yayy!");
// });
// server.listen(8000);    // Go to localhost:8000 for result

//EVENT LOOP
//Nodejs uses asynchronous programming
//Synchronous programmings wait for 1 full task to finish to move to the next one.
//In asynchronous, works are done simultaneously.. 1 part will keep doing its work and will pass on to the next part instead of waiting
//Nodejs works on single thread programming... Asynchronous..

//File System
//const fs=require("fs");
// // fs.watch('target.txt', ()=>console.log("File changed"));
// // console.log("Now watching target.txt for file changes.");
// // //The moment you change anything in target.txt, the message changes to line 49.. Else, line 50 is printed..

//const fileName = "target.txt";
// fs.readFile(fileName, (err,data)=>{
//     if(err){ 
//         throw err;
//     }
//     console.log(data.toString());
// });
// console.log("File change check");
//LINE 60 IS EXECUTED FIRST BEFORE LINE 58
//this is becoz, it is asynchronous programming.. 
//Line 58 will take time to execute... File needs to be extracted, then read, then checked for error.. Time taking.
//So, line 60 finishes executing.. (Think of the cashier restaurant example)

//All statements ending with sync are synchronous
// const data = fs.readFileSync(fileName)
// console.log(data.toString());
// //Here line 68 uis executed first.. Line 69 is after line 68
// console.log("File change check2");

//EXPRESSJS

const express = require("express");
const cors=require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app =  express(); // We get all func of express


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
})
//These urls cannot be exposed.. All imp info about db is in this only.. So, we write it as a variable in env and use it everywhere.. Keeps our info safe.
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB connection error", err));

const morgan=require("morgan");// We get to print url in terminal
const authRoutes = require('./routes/auth');


//get, post put, delete

//CUSTOM MIDDLEWARE
// const myMiddleware = (req,res,next) => {
//     console.log('!!Middleware Applied!!');
//     next(); //next is basically a call back, without it, application will stop then and t
// };

//CORS
app.use(cors());
//app.use(myMiddleware);
//MIDDLEWARE
app.use(morgan("dev"));

//routes middleware
app.use("/api", authRoutes);

// app.get('/api/users', function(req,res){
//     //1 // res.send("Hello from node api");
//     res.json({
//         users:[
//         {
//             name: "Valli",
//             age : 19,
//         },
//         {
//             name: "Vishnu",
//             age : 55,
//         },
//     ],

//     });
// });

// We shifted the above to auth.js
app.listen(8000, () => console.log("Server is running on 8000"));
//Output is Cannot GET in the localhost page