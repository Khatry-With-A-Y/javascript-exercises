const reverseString = function(string) {
    let reversed = "";
    for(let i = string.length-1; i >= 0; i--){
        reversed = reversed + string.slice(i,i+1);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
