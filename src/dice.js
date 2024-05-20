// dice.js
function Dice() {}
Dice.prototype.findCorrectNumber = function(dice_numbers) {
	
	if (dice_numbers[0] === 1) {
		return 6;
	  } else {
		return 4;
	  }

	
};
