import Parser from './scripts/parser';
import { add, divide, multiply, minus } from './scripts/core/operations';
import addItem from "./scripts/core/addItem";
import cleanField from "./scripts/core/cleanField";
import deleteOneElement from "./scripts/core/deleteOneElement";
import equal from "./scripts/core/equal";

import './styles/style.scss';

const p = new Parser();

function evaluateAsFloat(code) {
    function evaluate(obj) {
        switch (obj.type) {
        case "number":  return parseInt(obj.value);
        case "+":  return add(evaluate(obj.left), evaluate(obj.right));
        case "-":  return minus(evaluate(obj.left), evaluate(obj.right));
        case "*":  return multiply(evaluate(obj.left), evaluate(obj.right));
        case "/":  return divide(evaluate(obj.left), evaluate(obj.right));
            // todo: добавить остальные операции, написать на них тесты
        }
    }
    return evaluate(p.parse(code));
}

// работает только с "+", добавьте остальные операции
console.log(evaluateAsFloat('1 + 2 + 3 + 47'));

addItem();
cleanField();
deleteOneElement();
equal();