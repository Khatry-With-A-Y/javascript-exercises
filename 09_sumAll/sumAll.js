const sumAll = function(from, to) {

    if((Number.isInteger(from) === Number.isInteger(to)) && Math.sign(from)!==-1 && Math.sign(to)!==-1){
        
        if(from > to){
            let temp = to;
            to = from;
            from = temp;
        }

        let arrayOfInput =[];      //lmao there was no reason to create an array dummy but oh well :)
        for(let i = from; i <= to; i++ ){
            arrayOfInput.push(i);
        }
        
        let sum = arrayOfInput.reduce((acc,curr) => acc+curr);
        return sum;
    } else
        return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
