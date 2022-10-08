document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  var ran1 = Math.random() * 6;
  ran1 = Math.floor(ran1) + 1;
  var source1 = "images/dice" + ran1 + ".png";
  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", source1);

  var ran2 = Math.random() * 6;
  ran2 = Math.floor(ran2) + 1;
  var source2 = "images/dice" + ran2 + ".png";
  var img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", source2);

  if (ran1 > ran2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (ran1 < ran2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
