document.addEventListener('DOMContentLoaded', function () {
    // Очистить состояние модального окна при загрузке страницы
    const modal = document.getElementById("contactModal");
    if (modal) {
        modal.style.display = "none";
    }

    // Ваш остальной код
});
    
    // Модальное окно
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactButton");
    const span = document.querySelector(".close"); // Измените на querySelector

    // Открыть модальное окно при нажатии на кнопку
    if (btn) {
        btn.onclick = function () {
            if (modal) modal.style.display = "block";
        }
    }

    // Закрыть модальное окно при нажатии на "X"
    if (span) {
        span.onclick = function () {
            if (modal) modal.style.display = "none";
        }
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

    // Переход на страницу "Dailė" при клике на карточку item1
    if (cardItem1) {
        cardItem1.onclick = function () {
            window.location.href = 'Art_works.html'; // Переход на страницу Dailė
        };
    }

    // Переход на страницу "Fotografija" при клике на карточку item2
    if (cardItem2) {
        cardItem2.onclick = function () {
            window.location.href = 'Photoart.html'; // Переход на страницу Fotografija
             };
    }

    // Переход на страницу "Žvilgsnis į ateitį" при клике на карточку item3
    if (cardItem3) {
        cardItem3.onclick = function () {
            window.location.href = 'Future.html'; // Проверь, чтобы путь был правильным
            };
    }

    const images = document.querySelectorAll('.gallery-img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            if (img.classList.contains('expanded')) {
                // Если картинка уже увеличена, уменьшаем её
                img.classList.remove('expanded');
                img.classList.add('shrinked');
            } else if (img.classList.contains('shrinked')) {
                // Если картинка уже уменьшена, возвращаем её в исходный размер
                img.classList.remove('shrinked');
            } else {
                // Убираем классы у всех других изображений
                images.forEach(image => {
                    image.classList.remove('expanded');
                    image.classList.remove('shrinked');
                });
                // Увеличиваем текущую картинку
                img.classList.add('expanded');
            }
        });
    });

    // Проверка, чтобы функция не конфликтовала с другими
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.meniu');

    // Проверяем, существуют ли элементы на странице
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});


