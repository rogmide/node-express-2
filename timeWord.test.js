const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe('function');
  });
  test("Case#1", () => {
    expect(timeWord("00:00")).toEqual("midnight");
  });
  test("Case#2", () => {
    expect(timeWord("00:12")).toEqual("twelve twelve am");
  });
  test("Case#3", () => {
    expect(timeWord("01:00")).toEqual(`one o'clock am`);
  });
  test("Case#4", () => {
    expect(timeWord("06:01")).toEqual("six oh one am");
  });
  test("Case#5", () => {
    expect(timeWord("06:10")).toEqual("six ten am");
  });
  test("Case#6", () => {
    expect(timeWord("06:18")).toEqual("six eighteen am");
  });
  test("Case#7", () => {
    expect(timeWord("06:30")).toEqual("six thirty am");
  });
  test("Case#8", () => {
    expect(timeWord("10:34")).toEqual("ten thirty-four am");
  });
  test("Case#9", () => {
    expect(timeWord("12:00")).toEqual("noon");
  });
  test("Case#10", () => {
    expect(timeWord("12:09")).toEqual("twelve oh nine pm");
  });
  test("Case#11", () => {
    expect(timeWord("23:23")).toEqual("twenty-three twenty-three pm");
  });
});
