import operate from "../solve/operate";

const operateTests = [
    ['2 + 2', 2, '+', 2, 4],
    ['3 + 5', 3, '+', 5, 8],
    ['7 + 4', 7, '+', 4, 11],
    ['1 - 5', 1, '-', 5, -4],
    ['4 * 4', 4, '*', 4, 16],
    ['4 / 4', 4, '/', 4, 1],
    ['0 / 4', 0, '/', 4, 0],
];

operateTests.forEach(a => {
    test(`${a[0]}`, () => {
        expect(operate(a[0], a[1], a[2], a[3])).toBe(a[4]);
    });
});



