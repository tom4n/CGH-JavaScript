var board = [];
var size = 3;
var caroTable = "";
var isPlayer = true; //player1 = true, player2 = false;
var x_value = 1;
var o_value = 10;

for (a = 0; a < size; a++) { //vòng lặp size*size
    board[a] = [];
    for (b = 0; b < size; b++) {
        board[a][b] = 0;
    }
}
caroTable += `<table border=1 cellspacing=0>` //bảng table caro
for (a = 0; a < size; a++) {
    caroTable += `<tr>`
    for (b = 0; b < size; b++) {
        caroTable += `<td onclick="tick(${a},${b})" 
        class="${board[a][b] == 0 ? '': (board[a][b] == 1 ? "isX" : "isO")}">
        ${board[a][b] == 0 ? "&nbsp;&nbsp": (board[a][b]) == 1 ? "x": "o"}</td>`
    }
    caroTable += `</tr>`
}
caroTable += `</table>`
document.getElementById('caro').innerHTML = caroTable

function tick(a, b) {
    if (board[a][b] != 0) {
        alert('không được đánh vào ô đã đánh');
        return;
    } // nếu đánh trùng sẽ hiện thông báo
    if (isPlayer) {
        board[a][b] = x_value;
        isPlayer = false; // isPlayer là true nếu thực thi sẽ chuyển về false
    } else {
        board[a][b] = o_value;
        isPlayer = true; // nếu khác sẽ đánh o và chuyển về true
    }
    caroTable = "";
    caroTable += `<table border=1 cellspacing=0>` //vẽ lại bảng table ở phía trên
    for (a = 0; a < size; a++) {
        caroTable += `<tr>`
        for (b = 0; b < size; b++) {
            caroTable += `<td onclick="tick(${a},${b})" class="${board[a][b] == 0 ? '': (board[a][b] == 1 ? "isX" : "isO")}">
            ${board[a][b] == 0 ? "&nbsp;&nbsp": (board[a][b]) == 1 ? "x": "o"} </td>`
        }
        caroTable += `</tr>`
    }
    caroTable += `</table>`
    document.getElementById('caro').innerHTML = caroTable



    //cơ chế win
    // 2 đường ngang và 2 đường dọc ngoài cùng
    for (let a = 0; a < size; a += 2) {
        if (board[a][0] + board[a][1] + board[a][2] == 3) {
            alert('blue win')
        } else if (board[a][0] + board[a][1] + board[a][2] == 30) {
            alert('red win')
        }

        if (board[0][a] + board[1][a] + board[2][a] == 3) {
            alert('blue win')
        } else if (board[0][a] + board[1][a] + board[2][a] == 30) {
            alert('red win')
        }
    }
    // 2 đường dọc ngang giữa
    for (let a = 0; a < size - 2; a++) {
        if (board[1][a] + board[1][a + 1] + board[1][a + 2] == 3) {
            alert('blue win')
        } else if (board[1][a] + board[1][a + 1] + board[1][a + 2] == 30) {
            alert('red win')
        }

        if (board[a][1] + board[a + 1][1] + board[a + 2][1] == 3) {
            alert('blue win')
        } else if (board[a][1] + board[a + 1][1] + board[a + 2][1] == 30) {
            alert('red win')
        }
    }

    // 2 đường chéo
    for (let a = 0; a < size - 2; a++) {
        if (board[a][a] + board[a + 1][a + 1] + board[a + 2][a + 2] == 3) {
            alert('blue win')
        } else if (board[a][a] + board[a + 1][a + 1] + board[a + 2][a + 2] == 30) {
            alert('red win')
        }

        if (board[a][a + 2] + board[a + 1][a + 1] + board[a + 2][a] == 3) {
            alert('blue win')
        } else if (board[a][a + 2] + board[a + 1][a + 1] + board[a + 2][a] == 30) {
            alert('red win')
        }
    }

    // điều kiện hòa
    // for (let a = 0; a < size; a++) {
    //     for (let b = 0; b < size; b++) {
    //         if (board[a][b] === 1 || board[a][b] === 10) {
    //             alert('hòa')
    //         }
    //     }
    // } 

}