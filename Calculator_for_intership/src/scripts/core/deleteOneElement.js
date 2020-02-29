const deleteOneElement = () => {
    document
        .querySelector('.back')
        .addEventListener('click', () => {
            const str = document.querySelector('#calcArea').value;
            document.querySelector('#calcArea').value =
                str.substring(0, str.length - 1);
        })
}
export default deleteOneElement;