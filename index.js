
var arr = [5,8,0,3,9];
console.log(arr);
for (var i = 0; i < 5; i++) {
    var arr_min = arr[i];
    for (var j = i + 1; j < 6; j++) {
        if (arr[j] < arr_min) {
            var mm = arr[i];
            arr_min = arr[j];
            arr[i] = arr_min;
            arr[j] = mm;
        }
    }
}
console.log(arr);

