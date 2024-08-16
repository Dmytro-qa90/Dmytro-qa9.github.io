// Отримуємо елементи радіо-кнопок і поля
const emailRadio = document.getElementById('contact-email');
const phoneRadio = document.getElementById('contact-phone');
const emailField = document.getElementById('email-field');
const phoneField = document.getElementById('phone-field');

// Функція для переключення між полями
function toggleContactFields() {
    if (emailRadio.checked) {
        emailField.style.display = 'block';
        emailField.querySelector('input').required = true;
        phoneField.style.display = 'none';
        phoneField.querySelector('input').required = false;
    } else if (phoneRadio.checked) {
        phoneField.style.display = 'block';
        phoneField.querySelector('input').required = true;
        emailField.style.display = 'none';
        emailField.querySelector('input').required = false;
    }
}

// Додаємо слухачів подій для радіо-кнопок
emailRadio.addEventListener('change', toggleContactFields);
phoneRadio.addEventListener('change', toggleContactFields);

// Викликаємо функцію при завантаженні сторінки
window.addEventListener('DOMContentLoaded', toggleContactFields);