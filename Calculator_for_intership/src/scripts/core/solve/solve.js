import operate from "./operate";

const solve = (expression) => {

    const parenthesis = (str) => str.replace(/\(([^\(]*?)\)/g, (expStr, expr) => solve(expr));
    const doubleMinus = (str) => str.replace(/\-\-/g, "")
    const multiAndDiv = (str) => str.replace(/(\-?\d+\.?\d*)\s?([\*\/])\s?(\-?\d+\.?\d*)/g, operate);
    const addAndSub = (str) => str.replace(/(\-?\d+\.?\d*)\s?([\+\-])\s?(\-?\d+\.?\d*)/g, operate);

    for (let resolver of [parenthesis, doubleMinus, multiAndDiv, addAndSub]) {
        const result = resolver(expression);
        if (result !== expression) return solve(result);
    }

    return +expression;
};

export default solve;