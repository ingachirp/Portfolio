document.addEventListener('DOMContentLoaded', function () {
    // Очистить состояние модального окна при загрузке страницы
    const modal = document.getElementById("contactModal");
    if (modal) {
        modal.style.display = "none";
    }

    const btn = document.getElementById("contactButton");
    const span = document.querySelector(".close");

    // Открыть модальное окно при нажатии на кнопку
    if (btn) {
        btn.onclick = function () {
            if (modal) modal.style.display = "block";
        };
    }

    // Закрыть модальное окно при нажатии на "X"
    if (span) {
        span.onclick = function () {
            if (modal) modal.style.display = "none";
        };
    }

    // Закрыть модальное окно при нажатии вне его области
    window.onclick = function (event) {
        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Обработка клика на карточки
    const cardItem1 = document.querySelector('.item1');
    const cardItem2 = document.querySelector('.item2');
    const cardItem3 = document.querySelector('.item3');

    if (cardItem1) {
        cardItem1.onclick = function () {
            window.location.href = 'Art_works.html';
        };
    }

    if (cardItem2) {
        cardItem2.onclick = function () {
            window.location.href = 'Photoart.html';
        };
    }

    if (cardItem3) {
        cardItem3.onclick = function () {
            window.location.href = 'Future.html';
        };
    }

    // Галерея изображений
    const images = document.querySelectorAll('.gallery-img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
                img.classList.add('shrinked');
            } else if (img.classList.contains('shrinked')) {
                img.classList.remove('shrinked');
            } else {
                images.forEach(image => {
                    image.classList.remove('expanded');
                    image.classList.remove('shrinked');
                });
                img.classList.add('expanded');
            }
        });
    });

    // Меню "сэндвич"
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.meniu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    } else {
        console.error('Элемент .menu-toggle или .meniu не найден');
    }
});
