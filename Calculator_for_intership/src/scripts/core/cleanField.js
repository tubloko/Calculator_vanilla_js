const cleanField = () => {
    document
        .querySelector('.clean')
        .addEventListener('click', () => {
            document.querySelector('#calcArea').value = '';
        })
}
export default cleanField;