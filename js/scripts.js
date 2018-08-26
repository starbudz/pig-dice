function player(playerName, score, turnScore, turn) {
  this.playerName = playerName;
  this.score = score;
  this.turnScore = turnScore;
  this.turn = turn;
}
var dice = {
  sides: 6,
  roller: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
var startGame = function () {
  player1 = new Player();
  player2 = new Player();
  player1.turn = true;
}
var activePlayer = function() {
  if (player1.isActive === true) {
    $("#player2panel").removeClass("activeUser");
    $("#player1panel").addClass("activeUser");
  } else {
    $("#player1panel").removeClass("activeUser");
    $("#player2panel").addClass("activeUser");
  }
}
var whichPlayerHold = function() {
  if (player1.isActive === true) {
    playerHold(player1);
  } else {
    playerHold(player2);
  }
}

var playerHold = function(player) {
  player.gameScore += player.turnScore;
  switchPlayer();
}
player.prototype.nextTurn = function () {
  if (player1.turn === true) {
    player2.turn = true;
    player1.turn = false;
    resetTurn();
  }
  else {
    player1.turn = true;
    player2.turn = false;
    resetTurn();
  }
}
player.prototype.resetTurn = function () {
  player1.turnScore = 0;
  player2.turnScore = 0;
}
player.prototype.winnerCheck = function () {
  if (this.score >= 100) {
    alert(this.player+ " You are the winner!");
  }
}
player.prototype.hold = function() {
  player.gameScore += player.turnScore;
  switchPlayer();
}

$(document).ready(function() {
      $("#begin").click(function() {
        $("#intro").hide();
        $("#game").show();
        startGame();
        activePlayer();
      });
      $("button#roll").click(function(event) {
        $(".dice").html('<img src=img/dice-'+ randomDie +'.png>');
        whichPlayerRoll();
        activePlayer();
        var roundScore = roundScore + randomNumber();
        $("#player1TurnScore").text(player1.turnScore);
        $("#player1score").text(player1.score);
        $("#player2TurnScore").text(player2.turnScore);
        $("#player2score").text(player2.score);
        event.preventDefault();
      })

      $("button#hold").click(function(event) {
        event.preventDefault();
        whichPlayerHold();
        activePlayer();
      })
      });
