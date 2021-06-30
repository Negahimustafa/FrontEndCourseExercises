const repeatString = function(str, num) {
let repeatedString = "";
for (let i = num; i>0; i--){
    repeatString = repeatString + str; 
}
return repeatString; 
}

module.exports = repeatString
