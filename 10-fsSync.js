const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs')

console.log("start");
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first, second);
//default overwrite but flag can be set to append
writeFileSync(
    './content/result-sync.txt', 
    `This is the result 
    1st : ${first},
    2nd : ${second}`,
    {flag : 'a'} // append to file
)
console.log("done with task");
console.log("onto next");