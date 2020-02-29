import solve from "./solve/solve";

const equal = () => {
    document
        .querySelector('.equal')
        .addEventListener('click', () => {
            const expression = document.querySelector('#calcArea');
            expression.value = solve(expression.value);
        });
}
export default equal;