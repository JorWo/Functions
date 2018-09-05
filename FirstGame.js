function playGame() {
  //Ask player one ofr a number between 1 and 4
  var p1 = prompt("Player one. Number between 1 and 4");
  //Ask player two for a number between 1 and 4
  var p2 = prompt("Player two. Number between 1 and 4");
  //Scold the players if they entered a number outside of the range then 	 end the game.
  if ((p1 < 1 || p1 > 4) || (p2 < 1 || p2 > 4)) {
    window.alert("One of you cheated. Game over.");
    return;
  }
  //If player one AND player two numbers are the same, say everyone wins
  if (p1 === p2) {
    window.alert("You both win");
  }
  //ELSE tell both players what they chose, and why are they are losers
  else {
    window.alert("You both lose. Player one chose " + p1 + " and player two chose " + p2);
  }
}
playGame();
