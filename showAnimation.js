function showNumberWithAnimation(i, j, randNumber) {
  var numberCell = $("#number-cell-"+i+"-"+j);
  numberCell.css("background-color", getNumberBackgroundColor(randNumber));
  numberCell.css("color", getNumberColor(randNumber));
  if(randNumber > 1023) {
    numberCell.css("font-size", 0.4 * cellSideLength);
  }
  numberCell.text(randNumber);

  numberCell.animate({
    width: cellSideLength,
    height: cellSideLength,
    top: getPosTop(i, j),
    left: getPosLeft(i, j)
  }, 50);
}

function showMoveAnimation (x0, y0, x, y) {
  var numberCell = $("#number-cell-" + x0 + "-" + y0);
  numberCell.animate({
    top:getPosTop(x, y),
    left:getPosLeft(x, y)
  }, 200);
}

function updateScore(score) {
  $("#score").text(score);
}