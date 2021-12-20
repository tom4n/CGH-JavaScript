var randomNumber = [];
var multiNumber = [];
var n = 1;
var m = 0;
var totalPlus = 0;
// khai báo ngẫu nhiên 10 mảng trong randomNumber;
while (n <= 10) {
    randomNumber.push(Math.floor(Math.random() * 91) + 10);
    n++;
}
document.write("all number in Array: " + randomNumber + "<br>");


// tính tổng tất cả số trong mảng randomNumber;
while (m < randomNumber.length) {
    totalPlus += randomNumber[m];
    m++;
}
document.write("total plus in Array: " + totalPlus + "<br>");


// sử dụng for each để khai báo lần lượt các phần tử của mảng
// randomNumber.forEach(function(item) {
//     multiNumber.push(item*2);
// }); console.log("total multi in Array: " +  multiNumber);
//



//sử dụng for of để khai báo lần lượt các phần tử của mảng randomNumber, và đẩy tất cả vào mảng mới là multiNumber;
for (let item of randomNumber) {
    multiNumber.push(item * 2);
}
document.write("total multi in Array: " + multiNumber + "<br>");


//tạo một biết 'x' và sử dụng indexOf vào cái biến/mảng cần xét, để kiểm tra xem 'x' có trong mảng đó không;
let x = Number(prompt('type random number and find it in Array: '))
if (randomNumber.indexOf(x) != -1) {
    document.write("value is " + x + " and value found");
} else {
    document.write("value is " + x + " and value not found");
}