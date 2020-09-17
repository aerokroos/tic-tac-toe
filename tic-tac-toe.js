const board = ["-","-","-",
            "-","-","-",
            "-","-","-"];

let player = "-";
let computer = "";
let o = document.getElementById('O');
let x =  document.getElementById('X');
let option;

function chooseX() {
    playerValue = x
    player = playerValue.id;
}

function chooseO() {
    playerValue = o;
    player = playerValue.id;
}

function putChoose(playerPosition) {
    if (player === "X") {
        console.log(playerPosition);
        option = document.getElementById(playerPosition);
        option.src = "img/x.png";
        board[playerPosition] = "X";
        console.log(board); 
        computer ="O";
        computerIsPlaying(computer);
    
    } else if (player === "O") {
        option = document.getElementById(playerPosition);
        option.src = "img/circle.jpg";
        board[playerPosition] = "O";
        console.log(board);
        computer = "X";
        computerIsPlaying(computer);
    }
}

function randomPosition(){
    computerPosition = Math.floor((Math.random() * 8) + 1);
    return computerPosition;
}

function computerIsPlaying(computer) {
    computerPosition = randomPosition();
    if (computer === "X") {
        if (board[computerPosition] === "-") {
            let option = document.getElementById(computerPosition);
            option.src = "img/x.png";
            board[computerPosition] = "X";
            checkWinner();
        } else {
            computerIsPlaying(computer);
        }
    } else if (computer === "O") {
        if (board[computerPosition] === "-") {
            let option = document.getElementById(computerPosition);
            option.src = "img/circle.jpg";
            board[computerPosition] = "O";
            checkWinner();
        } else {
            computerIsPlaying(computer);
        }
    }
}

function checkWinner(){
    if (player === "X") {
        if (board[0] == "X" && board[1] == "X" && board[2] == "X"){
            console.log("You WON!!!");
        } else if (board[3] == "X" && board[4] == "X" && board[5] == "X"){
            console.log("You WON!!!");
        } else if (board[6] == "X" && board[7] == "X" && board[8] == "X"){
            console.log("You WON!!!");
        } else if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
            console.log("You WON!!!");
        } else if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
            console.log("You WON!!!");
        }
    } else if (player === "O") {
        if (board[0] == "O" && board[1] == "O" && board[2] == "O"){
            console.log("You WON!!!");
        } else if (board[3] == "O" && board[4] == "O" && board[5] == "X"){
            console.log("You WON!!!");
        } else if (board[6] == "O" && board[7] == "O" && board[8] == "O"){
            console.log("You WON!!!");
        } else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
            console.log("You WON!!!");
        } else if (board[0] == "O" && board[4] == "X" && board[8] == "O") {
            console.log("You WON!!!");
        }
    }
}



