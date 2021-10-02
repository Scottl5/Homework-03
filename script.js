// Assignment Code
const lower="abcdefghijklmnopqrstuvwxyz";
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number="0123456789";
const special ="!#$%&()*+,-./:;<=>?@[]^_{}|~"

const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let passLength = window.prompt("How many characters would you like the password?");
  let passNumber = parseInt(passLength);
  if (passNumber < 8 || passNumber > 128) {
    window.alert("Please choose a password that is longer than 8 characters and less than 128")
    return generatePassword();
  }
  let includeSpecial = window.confirm("Click OK to include special characters");
  let includeNumber = window.confirm("Click OK to confim including numeric characters");
  let includeLower = window.confirm("Click OK to include lowercase characters");
  let includeUpper = window.confirm("Click OK to include uppercase characters");
  let mega = "";
  let pass = "";
 
 


  if (includeSpecial) {
    mega += special;
    pass += special[Math.floor(Math.random() * special.length)];
  }

  if (includeNumber){
    mega += number;
    pass += number[Math.floor(Math.random() * number.length)];
  }
  
  if (includeLower){
    mega += lower;
    pass += lower[Math.floor(Math.random() * lower.length)];
  }

  if (includeUpper){
    mega += upper;
    pass += upper[Math.floor(Math.random() * upper.length)];
  }
  const passAdj = pass.length;
  for (let i = 0; i < passNumber - passAdj; i++) {
    const randomChar = mega[Math.floor(Math.random()*mega.length)];
    pass += randomChar;  
  }
  pass = pass.split("").sort(function(a, b) {
    return 0.5 - Math.random();
  }).join("");

  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);