const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

// Функція для відображення popup при завантаженні сторінки
window.addEventListener('load', () => {
    popup.style.display = 'flex'; // Показуємо popup, використовуючи flexbox для центрованого відображення
});

// Закриття popup при натисканні на кнопку закриття
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Закриття popup при натисканні поза його межами
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});