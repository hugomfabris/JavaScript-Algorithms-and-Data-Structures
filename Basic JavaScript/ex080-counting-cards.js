//Counting Cards
var count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++
  }
  else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
    count--
  }
  var betOrHold = 'Hold'
  if (count > 0) {
    betOrHold = 'Bet'
  }

    

return count + ' ' + betOrHold
}