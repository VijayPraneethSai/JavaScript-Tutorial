//whichever functions and variables you want the other js files to use write export before them

export let name="Praneeth";
let age = 19;

export function code(){
  console.log("coding...");
}

function code(){
  console.log("cooking...");
}

//here function code and variable name can be used but the variable age and the function cook cannot be used by the other js files