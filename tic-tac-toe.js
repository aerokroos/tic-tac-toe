const board = ["-","-","-",
            "-","-","-",
            "-","-","-"];

let player = "-";
let computer = "";
let o = document.getElementById('O');
let x =  document.getElementById('X');
let option;
let playerWinner = "You";
let computerWinner = "Computer";
let game = true;
let result = document.getElementById('result');

// Sounds
let win = new Audio('sounds/win.mp3');
let cuan = new Audio('sounds/cuan.mp3');


function chooseX() {
    playerValue = x;
    player = playerValue.id;
}

function chooseO() {
    playerValue = o;
    player = playerValue.id;
}

function putChoose(playerPosition) {
    if (player === "-") {
        alert("Please, select X or O");
    } else {
        if (board[playerPosition] === "X" || board[playerPosition] === "O") {
            alert("Busyy!!!!!");
        } else if (player === "X") {
            option = document.getElementById(playerPosition);
            option.src = "img/x.png";
            board[playerPosition] = "X";
            computer ="O";
            checkX(playerWinner);
            computerIsPlaying(computer);
        } else if (player === "O") {
            option = document.getElementById(playerPosition);
            option.src = "img/circle.jpg";
            board[playerPosition] = "O";
            computer = "X";
            checkO(playerWinner);
            computerIsPlaying(computer);
        }
    }
}

function randomPosition(){
    computerPosition = Math.floor((Math.random() * 8) + 1);
    return computerPosition;
}

function computerIsPlaying(computer) {
    if (game==true) {
        computerPosition = randomPosition();
        if (computer === "X") {
            if (board[computerPosition] === "-") {
                let option = document.getElementById(computerPosition);
                option.src = "img/x.png";
                board[computerPosition] = "X";
                checkX(computerWinner);
            } else {
                computerIsPlaying(computer);
            }
        } else if (computer === "O") {
            if (board[computerPosition] === "-") {
                let option = document.getElementById(computerPosition);
                option.src = "img/circle.jpg";
                board[computerPosition] = "O";
                checkO(computerWinner);
            } else {
                computerIsPlaying(computer);
            }
        }
    } else {
        game = false;
    }
}

function checkX(winner){
    if (board[0] == "X" && board[1] == "X" && board[2] == "X"){
        stylingWinner(winner);
        game = false;
    } else if (board[3] == "X" && board[4] == "X" && board[5] == "X"){
        stylingWinner(winner);
        game = false;
    } else if (board[6] == "X" && board[7] == "X" && board[8] == "X"){
        stylingWinner(winner);
        game = false;
    } else if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
        stylingWinner(winner);
        game = false;
    } else if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
        stylingWinner(winner);
        game = false;
    }  else if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
        stylingWinner(winner);
        game = false;
    } else if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
        stylingWinner(winner);
        game = false;
    }  else if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
        stylingWinner(winner);
        game = false;
    } 
}

function checkO(winner) {
    if (board[0] == "O" && board[1] == "O" && board[2] == "O"){
        stylingWinner(winner);
        game = false;
    } else if (board[3] == "O" && board[4] == "O" && board[5] == "O"){
        stylingWinner(winner);
        game = false;
    } else if (board[6] == "O" && board[7] == "O" && board[8] == "O"){
        stylingWinner(winner);
        game = false;
    } else if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
        stylingWinner(winner);
        game = false;
    } else if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
        stylingWinner(winner);
        game = false;
    }  else if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
        stylingWinner(winner);
        game = false;
    } else if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
        stylingWinner(winner);
        game = false;
    }  else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
        stylingWinner(winner);
        game = false;
    }
}

function stylingWinner(winner) {
    if (winner === playerWinner ) {
        result.innerHTML = winner + ' WON!!!';
        result.style.color = 'green';
        win.play();
    } else if (winner === computerWinner) {
        result.innerHTML = winner + ' WON!!!';
        result.style.color = 'red';
        cuan.play();
    } else {
        result.innerText = "DRAW!!!";
        result.style.color = "pink";
    }
}







