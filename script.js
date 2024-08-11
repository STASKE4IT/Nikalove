document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn1');

    button.addEventListener('click', () => {
        window.location.href = 'index2.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showSlide(i) {
        const totalSlides = slideImages.length;
        if (i >= totalSlides) {
            index = 0;
        } else if (i < 0) {
            index = totalSlides - 1;
        } else {
            index = i;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    showSlide(index); // Показать первый слайд при загрузке
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const btn2 = document.getElementById('btn2'); // Получаем элемент кнопки
    let index = 0;

    function showSlide(i) {
        const totalSlides = slideImages.length;
        if (i >= totalSlides) {
            index = 0;
        } else if (i < 0) {
            index = totalSlides - 1;
        } else {
            index = i;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    btn2.addEventListener('click', () => {
        window.location.href = 'index3.html'; // Переход на следующую страницу
    });

    showSlide(index); // Показать первый слайд при загрузке
});
