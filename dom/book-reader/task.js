const buttons = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        changeFontSize(button);
    });
});

function changeFontSize(newSize) {
    buttons.forEach(btn => btn.classList.remove('font-size_active'));
    newSize.classList.add('font-size_active');

    const size = newSize.getAttribute('data-size');
    book.classList.remove('book_fs-small', 'book_fs-big');

    if (size === 'small') {
        book.classList.add('book_fs-small');
    } else if (size === 'big') {
        book.classList.add('book_fs-big');
    }
}