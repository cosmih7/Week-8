describe("dealerShouldDraw", function () {

  it("should return false for hand: 10, 9 (total = 19)", function () {
    const hand = [
      { val: 10, displayVal: "10" },
      { val: 9, displayVal: "9" }
    ];
    expect(dealerShouldDraw(hand)).toBe(false);
  });

  it("should return true for hand: Ace, 6 (soft 17)", function () {
    const hand = [
      { val: 11, displayVal: "Ace" },
      { val: 6, displayVal: "6" }
    ];
    // Soft 17 => dealer should draw
    expect(dealerShouldDraw(hand)).toBe(true);
  });

  it("should return false for hand: 10, 6, Ace (hard 17)", function () {
    const hand = [
      { val: 10, displayVal: "10" },
      { val: 6, displayVal: "6" },
      { val: 11, displayVal: "Ace" }
    ];
    // This hand = 17 but hard (Ace counted as 1)
    expect(dealerShouldDraw(hand)).toBe(false);
  });

  it("should return true for hand: 2, 4, 2, 5 (total = 13)", function () {
    const hand = [
      { val: 2, displayVal: "2" },
      { val: 4, displayVal: "4" },
      { val: 2, displayVal: "2" },
      { val: 5, displayVal: "5" }
    ];
    expect(dealerShouldDraw(hand)).toBe(true);
  });

});
