const removeFromArray = function(dataArr, ...itemsToDelete) {
    let filteredArr = dataArr.filter((element) => !itemsToDelete.includes(element));
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
