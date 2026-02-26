const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modalOverlay');

// 1. Открытие при нажатии на Buy Now
openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы под модалкой
});

// 2. Закрытие при нажатии на крестик
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем прокрутку
});

// 3. Закрытие при клике вне окна (на оверлей)
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});