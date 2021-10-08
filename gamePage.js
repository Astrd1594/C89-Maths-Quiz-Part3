var player1Name = localStorage.getItem("Player 1");
var player2Name = localStorage.getItem("Player 2");
var player1Score = 0;
var player2Score = 0;
var asking = player1Name;
var answering = player2Name;
var pinkP = "";
var displayQuestion = "";
var answerInput = "";
var checkButton = "";
var row = "";
function setText(){
    document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
    document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
    document.getElementById("questionTurn").innerHTML = "Asking question: " + asking;
    document.getElementById("answerTurn").innerHTML = "Answering question: " + answering;
}
//OR copy and paste ||
function check(){
    pinkP = "";
    displayQuestion = "";
    answerInput = "";
    checkButton = "";
    row = pinkP + displayQuestion + answerInput + checkButton;
    document.getElementById("output").innerHTML = row;
}
function send(){
    var number1 = document.getElementById("number1Input").value;
    var number2 = document.getElementById("number2Input").value;
    var answer = number1 * number2;
    pinkP = "<div class='pink'><p class='pinkP'>_____</p></div>"
    displayQuestion = "<p id='displayQuestion'>? x ? = ?</p>";
    answerInput = "<input id='answerInput' placeholder='Type here...' type='number'>";
    checkButton = "<button id='checkButton' type='button' onclick='check()'>Check</button><br>";
    row = pinkP + displayQuestion + answerInput + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("displayQuestion").innerHTML = number1 + " x " + number2;
    document.getElementById("number1Input").innerHTML = "";
    document.getElementById("number2Input").innerHTML = "";
    number1 = document.getElementById("number1Input").value;
    number2 = document.getElementById("number2Input").value;
    console.log("Number 1: " + number1);
    console.log("Number 2: " + number2);
    console.log("Equation answer: " + answer);
}