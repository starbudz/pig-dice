// BACK END START
function Player(playerName, score, turnScore, turn) {
  this.playerName = playerName;
  this.score = 0;
  this.turnScore = 0;
  this.turn = turn;
}
var roller = function(){
  var dice = Math.floor((Math.random() * 6) + 1);
   return dice;
}

var roll = roller();
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
// BACK END fIN
// FRONT END START
$(document).ready(function() {
      $("#begin").click(function() {
        $("#intro").hide();
        $("#game").show();
        startGame();
      });
      $("#roll").click(function(event) {
        event.preventDefault();
        $(".result").html('<img src=img/dice' + roll + '.png>');
        var rolledOne = function (Player) {
          if (roll === 1){
            Player.turnScore = 0;
            nextTurn();
            $("h3.warning").text("You rolled a one. Score for this turn is zero.");
          } else {
            Player.turnScore += roll;
          }
          return roll;
        }
        if (player1.turn === true) {
          rolledOne(player1);
        } else {
          rolledOne(player2);
        }
        var roundScore = roundScore + roller();
        $("#player1TurnScore").text(player1.turnScore);
        $("#player1score").text(player1.score);
        $("#player2TurnScore").text(player2.turnScore);
        $("#player2score").text(player2.score);
      })

      $("#hold").click(function(event) {
        event.preventDefault();
        var hold = function (Player) {
          Player.score += Player.turnScore;
          nextTurn();
          $("h3.warning").text("Turn over. Next player ready.");
        }
        if (player1.turn === true) {
          hold(player1);
        } else {
          hold(player2);
        }
      })
      });
