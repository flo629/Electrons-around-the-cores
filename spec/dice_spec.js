describe('dice', function() {
	beforeEach(function() {
		dice = new dice();
	});

	it("should return 6 for [1, 2, 3, 4, 5]", function() {
        expect(dice.findCorrectNumber([1, 2, 3, 4, 5])).toEqual(6);
    });

});
