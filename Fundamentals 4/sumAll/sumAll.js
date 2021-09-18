const sumAll = function(rangeStart, rangeEnd) {
let sum = 0; 
for (let i= rangeStart; i <=rangeEnd; i++){
    sum += i; 
}
return sum;
}

module.exports = sumAll
