function Player(playerName, score, turnScore, turn) {
  this.playerName = playerName;
  this.score = 0;
  this.turnScore = 0;
  this.turn = turn;
}
var dice = roller();

function roller() {
    dice = Math.floor(6*Math.random())+1;

    return dice;
};
var startGame = function () {
  player1 = new Player();
  player2 = new Player();
  player1.turn = true;
}
var nextTurn = function () {
if (player1.turn === true){
  player1.turn = false;
  player2.turn = true;
  turnReset();
} else {
  player1.turn = true;
  player2.turn = false;
  turnReset();
}
}
var turnReset = function () {
  player1.turnScore = 0;
  player2.turnScore = 0;
}
var playerRoll = function() {
  if (player1.turn === true) {
    rolledOne(player1);
  } else {
    rolledOne(player2);
  }
  return roll;
}
var playerHold = function() {
  if (player1.turn === true) {
    hold(player1);
  } else {
    hold(player2);
  }
}
var rolledOne = function () {
  var roll = dice;
  if (roll === 1){
    $("h3.result").text("You rolled a one. Score for this turn is zero.");
    nextTurn();
  } else {
    Player.turnScore += Player.roll;
  }
  gameOver();
}
var hold = function () {
  Player.score += Player.turnScore;
  $("h3.result").text("Turn over. Next player ready.");
  nextTurn();
}
var gameOver = function () {
  if (Player.score >= 100){
    $("h3.result").text("Game Over! "+ Player.playerName +"is the winner" );
  }
}

$(document).ready(function() {
      $("#begin").click(function() {
        $("#intro").hide();
        $("#game").show();
        startGame();
      });
      $("#roll").click(function(event) {
        $(".result").html('<img src=img/dice' + dice + '.png>');
        playerRoll();
        $("#player1TurnScore").text(player1.turnScore);
        $("#player1score").text(player1.score);
        $("#player2TurnScore").text(player2.turnScore);
        $("#player2score").text(player2.score);
        event.preventDefault();
      })

      $("#hold").click(function(event) {
        event.preventDefault();
        playerHold();
      })
      });
