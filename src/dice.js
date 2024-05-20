// dice.js
function Dice() {}
Dice.prototype.findCorrectNumber = function(dice_numbers) {
	
	if (dice_numbers[0] === 1) {
		return 6;
	  } else if(dice_numbers[0] === 2) {
		return 4;
	  }else
	  {
		return 2;
	  }

	
};
