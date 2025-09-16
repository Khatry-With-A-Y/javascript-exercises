const leapYears = function(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true;
    else return false;

    //what i originally did
    //let result;
    //if(year % 4 == 0){
    //    result = true;
    //    if(year % 100 == 0){
    //        result = false;
    //        if(year % 400 == 0){
    //            result = true;
    //        }
    //    }
    //    return result;
    //} else {
    //    return false;
    //}
};

// Do not edit below this line
module.exports = leapYears;
