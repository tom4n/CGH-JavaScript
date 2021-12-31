function loadGame() {
    let CaroTable = function(row, col) {
        this.row = row;
        this.col = col;
        this.arr = [];
        caroArr = this.arr;
        let last = "X";

        this.draw = function() {
            let result = "<table cellspacing = '0' >";
            let r = this.row;
            let c = this.col;
            for (let i = 0; i < r; i++) {
                caroArr.push([]);
                result += "<tr id='" + i + "'>"
                for (let j = 0; j < r; j++) {
                    result += "<td><div class='CaroContent' id='" + i + "-" + j + "'></div></td>"
                    caroArr[i].push("");
                }
                result += "</tr>"
            }
            result += "</table>"
            return result;
        }

        function changeLast() {
            let lastValue = last;
            if (last == "X") {
                last = "O";
            } else {
                last = "X";
            }
            return lastValue;
        }

        function checkResult() {
            let n = caroArr.length;
            let value = "";
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    value = caroArr[i][j];
                    if (value != "") {
                        switch (true) {
                            case (caroArr[i][j + 1] == value) && (caroArr[i][j + 2] == value) && (caroArr[i][j + 3] == value) && (caroArr[i][j + 4] == value):
                                alert(caroArr[i][j] + " won!");
                                break;
                            case (caroArr[i + 1][j] == value) && (caroArr[i + 2][j] == value) && (caroArr[i + 3][j] == value) && (caroArr[i + 4][j] == value):
                                alert(caroArr[i][j] + " won!");
                                break;
                            case (caroArr[i + 1][j + 1] == value) && (caroArr[i + 2][j + 2] == value) && (caroArr[i + 3][j + 3] == value) && (caroArr[i + 4][j + 4] == value):
                                alert(caroArr[i][j] + " won!");
                                break;
                            case (caroArr[i - 1][j + 1] == value) && (caroArr[i - 2][j + 2] == value) && (caroArr[i - 3][j + 3] == value) && (caroArr[i - 4][j + 4] == value):
                                alert(caroArr[i][j] + " won!");
                                break;
                        }
                    }
                }
            }
        }

        this.listenToclick = function() {
            $(".CaroContent").click(function(event) {
                if ($(this).text() == "") {
                    let lastValue = changeLast();
                    $(this).text(lastValue);
                    let pos = (event.target.id).split("-");
                    caroArr[Number(pos[0])][Number(pos[1])] = lastValue;
                    checkResult();
                }
            });
        }
    }
    let ctable = new CaroTable(20, 20);
    document.getElementById("caroTable").innerHTML = ctable.draw();
    ctable.listenToclick();
}
loadGame();