const board = ["-", "-", "-",
            "-", "-", "-", 
            "-", "-", "-"];

let player = "-";
let computer = "";
let positionComputer;

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

function putChoose(idItem, position) {
    if (player === "X") {
        option = document.getElementById(idItem.id);
        option.src = "img/x.png";
        board[position] = "X";
        
        computer ="O";
        console.log(computer);
        computerIsPlaying(computer, idItem);
    } else if (player === "O") {
        option = document.getElementById(idItem.id);
        option.src = "img/circle.jpg";
        board[position] = "O";

        computer = "X";
        console.log(computer);
        computerIsPlaying(computer, idItem);
    }
    winner(board);
}

function randomPosition(){
    positionComputer = Math.floor((Math.random() * 8) + 1);
    return positionComputer;
}

function computerIsPlaying(computer, idItem) {
    if (computer === "X") {
        console.log("PC X");
        let option = document.getElementById(idItem.id);
        option.src = "img/x.png";
    } else if(computer === "O") {
        console.log("PC O");
        let option = document.getElementById(idItem.id);
        option.src = "img/circle.jpg";
    }
}



function winner(board){
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
}






// showBoard(board);



