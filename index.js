//#region CONFIG
let input = "";
try { 
     input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch (e) {  
    input = require("fs").readFileSync("./dev/stdin", "utf8");
}
let lines = input.split("\n");
//#endregion



let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
let X = A + B

console.log('SOMA =',X )

