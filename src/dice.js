// dice.js
function Dice() {}
Dice.prototype.findCorrectNumber = function(dice_numbers) {
	
	var electrons = 0;
	electrons += dice_numbers.filter(x => x === 3).length * 2;
	electrons += dice_numbers.filter(x => x === 5).length * 4;
	
	return electrons;
	
	

	
};
