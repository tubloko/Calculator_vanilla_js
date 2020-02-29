import solve from "../solve/solve";

const tests = [
    ['(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11)', 1],
    ['((2.33 / (2.9+3.5)*4) - -6)', 7.45625],
    ['123.45*(678.90 / (-2.5+ 11.5)-(80 -19) *33.25) / 20 + 11', -12042.760875],
    ['2 / (2 + 3) * 4.33 - -6', 7.732],
    ['2 /2+3 * 4.75- -6', 21.25],
    ['3 * 3 + (3 * 3 - (3 + 3))', 12],
    ['12* 123/-(-5 + 2)', 492],
    ['(1 - 2) + -(-(-(-4)))', 3],
    ['2 / (2 + 3) * 4.33 - -6', 7.732],
    ['12* 123/(-5 + 2)', -492],
];

tests.forEach(a => {
    test(`${a}`, () => {
        expect(solve(a[0])).toBe(a[1]);
    })
});
