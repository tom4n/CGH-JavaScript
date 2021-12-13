const move_left = 37;
const move_right = 39;
const move_up = 38;
const move_down = 40;
const step = 5;
const soldier_left = "/image/left.gif";
const soldier_right = "/image/right.gif";
const soldier_up = "/image/up.gif";
const soldier_down = "/image/down.gif";
const soldier_height = "200px";
const soldier_width = "200px";

function load() {
    let soldier = document.getElementById('soldier');
    soldier.src = soldier_right;
    soldier.style.height = soldier_height;
    soldier.style.width = soldier_width;
    soldier.style.position = 'relative';
    soldier.style.top = 0;
    soldier.style.left = 0;
    window.addEventListener("keydown", controlSoldier);
}

function controlSoldier(event) {
    switch (event.keyCode) {
        case move_left:{
            let soldier = document.getElementById('soldier');
            soldier.src = soldier_left;
            if (parseInt(soldier.style.left) >= 0) {
                soldier.style.left = parseInt(soldier.style.left) - step + "px";           
            }
            break;
        }
        case move_right:{
            let soldier = document.getElementById('soldier');
            soldier.src = soldier_right;
            if (parseInt(soldier.style.left) + parseInt(soldier.style.width) + step < window.innerWidth) {
                soldier.style.left = parseInt(soldier.style.left) + step + "px";
            }
            break;
        }
        case move_up:{
            let soldier = document.getElementById('soldier');
            soldier.src = soldier_up;
            if (parseInt(soldier.style.top) >= 0) {
                soldier.style.top = parseInt(soldier.style.top) - step + "px";
            }
            break;
        }
        case move_down:{
            let soldier = document.getElementById('soldier');
            soldier.src = soldier_down;
            if (parseInt(soldier.style.top) + parseInt(soldier.style.height) + step < window.innerHeight) {
                soldier.style.top = parseInt(soldier.style.top) + step + "px";
            }
            break;
        }
        default:
            alert("use arrow key !!!");
            break;
    }
}