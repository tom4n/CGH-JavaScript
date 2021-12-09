function tinhSoNgay() {
    let thang = document.getElementById('month').value;
        switch (thang) {
            case "1":
                document.getElementById('result').innerText='Tháng 1 có 31 ngày.';
                break;
            case "2":
                document.getElementById('result').innerText='Tháng 2 có 28 ngày (năm thường) hoặc 29 ngày (năm nhuận).';
                break;
            case "3":
                document.getElementById('result').innerText='Tháng 3 có 31 ngày.';
                break;
            case "4":
                document.getElementById('result').innerText='Tháng 4 có 30 ngày.';
                break;
            case "5":
                document.getElementById('result').innerText='Tháng 5 có 31 ngày.';
                break;
            case "6":
                document.getElementById('result').innerText='Tháng 6 có 30 ngày.';
                break;
            case "7":
                document.getElementById('result').innerText='Tháng 7 có 31 ngày.';
                break;
            case "8":
                document.getElementById('result').innerText='Tháng 8 có 31 ngày.';
                break;
            case "9":
                document.getElementById('result').innerText='Tháng 9 có 30 ngày.';
                break;
            case "10":
                document.getElementById('result').innerText='Tháng 10 có 31 ngày.';
                break;
            case "11":
                document.getElementById('result').innerText='Tháng 11 có 30 ngày.';
                break;
            case "12":
                document.getElementById('result').innerText='Tháng 12 có 31 ngày.';
                break;
            default:
                document.getElementById('result').innerText='không phải tháng';
        }
}
