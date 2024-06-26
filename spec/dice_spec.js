describe('dice', function() {
	beforeEach(function() {
		dice = new Dice();
	});

	it("should return 6 for [1, 2, 3, 4, 5]", function() {
        expect(dice.findCorrectNumber([1, 2, 3, 4, 5])).toEqual(6);
    });

	it("should return 4 for [2, 2, 3, 3]", function() {
        expect(dice.findCorrectNumber([2, 2, 3, 3])).toEqual(4);
    });
	
	it("should return 2 for [6, 6, 4, 4, 1, 3]", function() {
        expect(dice.findCorrectNumber([6, 6,4, 4, 1, 3])).toEqual(2);
    });

	it("should return 12 for [ 3, 5, 3, 5, 4, 2 ]", function() {
        expect(dice.findCorrectNumber([ 3, 5, 3, 5, 4, 2 ])).toEqual(12);
    });
	
	it("should return 0 for [1, 2, 3]", function() {
        expect(dice.findCorrectNumber([1, 2, 3])).toEqual(0);
    });
	
	

});
