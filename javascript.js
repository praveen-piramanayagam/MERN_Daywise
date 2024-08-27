// function
let a = 10;
function arrfunc1(){
    console.log(a);
}
arrfunc1();

// Arrow fn
let arrfunc = () => {
    console.log("Arrow function");
}
arrfunc();


// higher order fn
function hof(){
    console.log("higher order function_1");
    return function returnfn(){
        console.log("higher order return function");
    }
    
}
let var1=hof();
var1();  

var id1 = 2;
var class1 = (id1=1) ? "true" : "false";
console.log(class1); 
