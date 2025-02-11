function showForm() {
    document.querySelector('.main-container').style.animation = 'fadeOut 1s ease-in-out forwards';
    document.querySelector('.button-container').style.animation = 'fadeOut 1s ease-in-out forwards';

    setTimeout(() => {
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector('.button-container').style.display = 'none';
        document.querySelector('.form-container').style.display = 'flex';
    }, 1000);
}