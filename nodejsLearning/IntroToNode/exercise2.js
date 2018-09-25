function average(arr) {
    var sum = 0;
    // for (var i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    arr.forEach(element => {
       sum += element; 
    });
    return Math.round(sum / arr.length);
}
var scores = [90,89,98,100,100,86,94];
var result = average(scores);
console.log(result);

var scores2 = [40,65,77,82,80,54,73,63,95,49]
var result2 = average(scores2);
console.log(result2);
