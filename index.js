// discuss about package.json and package-lock.json

// const _ = require('lodash');

// console.log(_.last([1, 5, 3, 2]));

// console.log(window);
// console.log(global);

// window used to attach variables with it
// but global don't attach aby variables with itself
// discuss about package.json and package-lock.json

// const a = 3;
// console.log(a);
// setTimeout(() => {
//     console.log('test');
// }, 1000);
// console.log(global);
// will be discussed later from where it is coming
// and also the require
// they are not in the global object
// console.log(__dirname);
// console.log(__filename);
// show modularity using index.html, script.js and script2.js
// require is used to import
// const people = require('./people') //people and people.js are same files
// console.log(people.people);
// console.log(people.a);
// console.log(people.test);
// people.test();
// but it returns {}
// so add codes for export in people.js

// console.log(people.people);
// console.log(people.t);
// people.test();

// lodash
// const _=require('lodash');
// console.log(_.last(people.people));

// path module
// const path = require('path');
// os module
// const os = require('os');
// file module
const fs = require('fs');
// path module's fuction use
// const mypath = 'E:/NodeJS/Second NodeJs Tutorial/index.js';
// console.log(path.basename(mypath));
// console.log(path.dirname(mypath));
// console.log(path.parse(mypath));

// os module's fuction use
//  console.log(os.platform());
//  console.log(os.homedir());
//  console.log(os.freemem());
//  console.log(os.cpus());

// fs module's fuction use
// fs.writeFileSync('test.txt', 'Learning JS');
// fs.writeFileSync('test.txt', 'Learning JS Test');
// fs.appendFileSync('test.txt', 'append Learning JS');
// const data = fs.readFileSync('test.txt');
// console.log(data);
// //it returns buffer ( a separate data that gives binary form data)
// console.log(data.toString());

// node js works in asynchronous non-blocking way
// readFileSync gives synchronous feature and readFile gives asynch feature
// it better to use asynchronous always
// asynchronous gives a task a moves to the next line work that's why it needs
// a call back function to hold that assigned task

fs.readFile('test.txt', (err, dataAsync) => {
    console.log(dataAsync.toString());
});

console.log('hello');
