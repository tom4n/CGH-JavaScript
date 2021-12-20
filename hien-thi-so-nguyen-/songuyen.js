var numbers = prompt("số lượng số nguyên tố cần in ra: ");
var count = 0;


for (var N = 2; N <= numbers; N++) {
    if (N%1 == 0 && N%N ==0 && N%2 !=0)
        document.write(N + '<br>');
        count++;
    }
    document.write('>>' + count);

    
    