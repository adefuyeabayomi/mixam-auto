function generatePassword () {
    let alphaArray = ['a','A',"b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];
    let random1 = String(alphaArray[Math.round(Math.random()*52)]) + String(alphaArray[Math.round(Math.random()*52)]) + String(alphaArray[Math.round(Math.random()*52)]);
    let random2 = String(alphaArray[Math.round(Math.random()*52)]);
    let ranNo = String(alphaArray[Math.round(Math.random()*10000)]);
    return random1 + ranNo + random2;  
}
let utils = {
    generatePassword,
}
module.exports = utils;