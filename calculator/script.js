const inputTag = document.querySelector("#input")
let output = " ";
let press = (num)=>{
    output += num;
    inputTag.value = output;
};

const equal = ()=>{
    inputTag.value = eval(output);
    output =" ";
}
const clear = ()=>{
    // output = " ";
    // inputTag.value = output
    console.log("it's working")
}