//whichever functions and variables you want the other js files to use write export before them

let account_no = 4555452342;
let account_type = "saving";

export function withdraw(){
  console.log("Amount deducted...");
}

export function deposit(){
  console.log("Balance updated...");
}

//here both functions can be used but the variables cannot be used by the other js files
