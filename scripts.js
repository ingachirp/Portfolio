document.addEventListener('DOMContentLoaded', function () {
    // Модальное окно
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactButton");
    const span = document.getElementsByClassName("close")[0];

    // Открыть модальное окно при нажатии на кнопку
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // Закрыть модальное окно при нажатии на "X"
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Закрыть модальное окно при нажатии вне его области
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Обработка клика на карточки
    const cardItem1 = document.querySelector('.item1');
    const cardItem2 = document.querySelector('.item2');
    const cardItem3 = document.querySelector('.item3');

    // Переход на страницу "Dailė" при клике на карточку item1
    cardItem1.onclick = function () {
        window.location.href = 'Art_works.html'; // Переход на страницу Dailė
    };

    // Переход на страницу "Fotografija" при клике на карточку item2
    cardItem2.onclick = function () {
        window.location.href = 'Photoart.html'; // Переход на страницу Fotografija
    };

    // Переход на страницу "Žvilgsnis į ateitį" при клике на карточку item3
    cardItem3.onclick = function () {
        window.location.href = '#'; // Здесь замени на нужную страницу
    };
});
