function playGame() {
  //Ask player one for a number between 1 and 4
  var p1 = prompt("Player one. Number between 1 and 4");
  //Ask player two for a number between 1 and 4
  var theComputer = Math.floor(Math.random()*4+1);
  //Scold the players if they entered a number outside of the range then 	 end the game.
  if ((p1 < 1 || p1 > 4) || (theComputer < 1 || theComputer > 4)) {
    window.alert("One of you cheated. Game over.");
    return;
  }
  //If player one AND player two numbers are the same, say everyone wins
  if (p1 == theComputer) {
    window.alert("You win");
  }
  //ELSE tell both players what they chose, and why are they are losers
  else {
    window.alert("You both lose. Player one chose " + p1 + " and the computer chose " + theComputer);
  }
}
playGame();