
if (window.performance) {
  if (performance.navigation.type == 1) {
    //alert( "This page is reloaded" );

    var rand = Math.random();
    rand = (rand * 6) + 1;
    rand = Math.floor(rand);

    if(rand === 1)
      document.querySelector(".player1 img").setAttribute("src", "images/dice1.png");
    else if(rand === 2)
      document.querySelector(".player1 img").setAttribute("src", "images/dice2.png");
    else if(rand === 3)
      document.querySelector(".player1 img").setAttribute("src", "images/dice3.png");
    else if(rand === 4)
      document.querySelector(".player1 img").setAttribute("src", "images/dice4.png");
      else if(rand === 5)
        document.querySelector(".player1 img").setAttribute("src", "images/dice5.png");
        else if(rand === 6)
          document.querySelector(".player1 img").setAttribute("src", "images/dice6.png");
        else{

        }

    /*
    var player_rand = Math.random();
    player_rand = Math.round((player_rand * 1)) + 1;
    alert(player_rand);
    */

    var rand2 = Math.random();
    rand2 = (rand2 * 6) + 1;
    rand2 = Math.floor(rand2);

    if(rand2 === 1)
      document.querySelector(".player2 img").setAttribute("src", "images/dice1.png");
    else if(rand2 === 2)
      document.querySelector(".player2 img").setAttribute("src", "images/dice2.png");
    else if(rand2 === 3)
      document.querySelector(".player2 img").setAttribute("src", "images/dice3.png");
    else if(rand2 === 4)
      document.querySelector(".player2 img").setAttribute("src", "images/dice4.png");
      else if(rand2 === 5)
        document.querySelector(".player2 img").setAttribute("src", "images/dice5.png");
        else if(rand2 === 6)
          document.querySelector(".player2 img").setAttribute("src", "images/dice6.png");
        else{

        }

      if( rand > rand2){
        document.querySelector("h1").innerText = "Player 1 wins";
      }
      else if (rand2 > rand){
        document.querySelector("h1").innerText  = "Player 2 wins";
      }
      else{
        document.querySelector("h1").innerText  = "Draw";
      }












  } else {
    alert( "This page is not reloaded");
  }
}
