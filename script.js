// const track = document.getElementById('track');
//     const dotsContainer = document.getElementById('dots');
//     const cards = document.querySelectorAll('.card');
    
//     let currentIndex = 0;
//     const totalCards = cards.length;
//     const visibleCards = 4; // Сколько карточек видим одновременно
//     const maxIndex = totalCards - visibleCards; // Максимальный индекс для листания

//     // 1. Создаем точки (количество точек = количеству возможных шагов)
//     for (let i = 0; i <= maxIndex; i++) {
//         const dot = document.createElement('div');
//         dot.classList.add('dot');
//         if (i === 0) dot.classList.add('active');
        
//         dot.addEventListener('click', () => {
//             currentIndex = i;
//             updateSlider();
//         });
//         dotsContainer.appendChild(dot);
//     }

//     const dots = document.querySelectorAll('.dot');

//     function updateSlider() {
//         const cardWidth = cards[0].offsetWidth + 20; // ширина + gap
//         track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
//         // Обновляем активную точку
//         dots.forEach((dot, index) => {
//             dot.classList.toggle('active', index === currentIndex);
//         });
//     }

//     // Автоматическое бесконечное листание по одной карточке
//     setInterval(() => {
//         currentIndex++;
//         if (currentIndex > maxIndex) {
//             currentIndex = 0; // Возврат в начало
//         }
//         updateSlider();
//     }, 4000);

//     // Корректная работа при изменении размера экрана
//     window.addEventListener('resize', updateSlider);




const track = document.getElementById('track');
const dotsContainer = document.getElementById('dots');
const cards = document.querySelectorAll('.card');

const originalCount = 8; 
let currentIndex = 0;
let autoPlayInterval;

// Создаем 8 точек
for (let i = 0; i < originalCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    
    dot.onclick = () => {
        if (i === originalCount - 1 && currentIndex === originalCount - 1) {
            currentIndex = 0; 
        } else {
            currentIndex = i; 
        }
        updateSlider();
        resetAutoPlay();
    };
    dotsContainer.appendChild(dot);
}

const allDots = document.querySelectorAll('.dot');

function updateSlider() {
    const cardWidth = cards[0].getBoundingClientRect().width + 20; 
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    allDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// // --- 1. АВТОМАТИЧЕСКОЕ ЛИСТАНИЕ ---
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= originalCount) {
            currentIndex = 0; 
        }
        updateSlider();
    }, 3000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

startAutoPlay();

// --- 2. ИСПРАВЛЕННОЕ ЛИСТАНИЕ МЫШКОЙ ---
let isDragging = false;
let startX = 0;
let currentX = 0;

// Убираем стандартное поведение картинок, чтобы они не мешали тянуть
track.querySelectorAll('img').forEach(img => {
    img.draggable = false;
});

track.style.cursor = "grab";
track.style.userSelect = "none"; // Чтобы текст не выделялся

track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    track.style.cursor = "grabbing";
    track.style.transition = "none"; // Отключаем плавность пока тянем
    clearInterval(autoPlayInterval); 
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Важно! Останавливает выделение и перетаскивание браузером
    currentX = e.pageX;
    const diff = currentX - startX;
    
    const cardWidth = cards[0].getBoundingClientRect().width + 20;
    const currentTranslate = -(currentIndex * cardWidth) + diff;
    
    // Двигаем трек вслед за мышкой в реальном времени
    track.style.transform = `translateX(${currentTranslate}px)`;
});

window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = "grab";
    
    const diff = e.pageX - startX;

    // Если протащили больше чем на 100px — листаем
    if (diff < -100 && currentIndex < originalCount - 1) {
        currentIndex++;
    } else if (diff > 100 && currentIndex > 0) {
        currentIndex--;
    }
    
    updateSlider(); // Возвращаем плавность и фиксируем позицию
    startAutoPlay();
});

window.addEventListener('resize', updateSlider);








// // slider
// document.addEventListener('DOMContentLoaded', () => {

//     const track = document.querySelector('.products_slider--track');
//     const originalCards = document.querySelectorAll('.products_slider--track--card');
//     const dotsContainer = document.querySelector('.products_dots');

//     if (!track || !originalCards.length || !dotsContainer) return;

//     const gap = 18;
//     const visibleCards = 4;
//     const cardWidth = originalCards[0].offsetWidth + gap;

//     let autoplayInterval;

//     // CLONE cards at end
//     originalCards.forEach(card => {
//         const clone = card.cloneNode(true);
//         track.appendChild(clone);
//     });

//     // CLONE cards at start
//     originalCards.forEach(card => {
//         const clone = card.cloneNode(true);
//         track.insertBefore(clone, track.firstChild);
//     });

//     const totalCards = originalCards.length;

//     // START from real first card
//     track.scrollLeft = totalCards * cardWidth;

//     // CREATE DOTS
//     originalCards.forEach((_, i) => {

//         const dot = document.createElement('div');
//         dot.classList.add('products_dots-dot');

//         if (i === 0)
//             dot.classList.add('active');

//         dot.addEventListener('click', () => {

//             stopAutoplay();

//             track.scrollTo({
//                 left: (i + totalCards) * cardWidth,
//                 behavior: 'smooth'
//             });

//             startAutoplay();

//         });

//         dotsContainer.appendChild(dot);

//     });

//     const dots = document.querySelectorAll('.products_dots-dot');

//     // UPDATE dots
//     function updateDots() {

//         const index =
//             Math.round(track.scrollLeft / cardWidth) % totalCards;

//         dots.forEach(dot =>
//             dot.classList.remove('active'));

//         dots[index].classList.add('active');

//     }

//     // INFINITE LOOP LOGIC
//     track.addEventListener('scroll', () => {

//         const scrollLeft = track.scrollLeft;
//         const totalWidth = totalCards * cardWidth;

//         if (scrollLeft <= cardWidth) {

//             track.scrollLeft += totalWidth;

//         }

//         if (scrollLeft >= totalWidth * 2) {

//             track.scrollLeft -= totalWidth;

//         }

//         updateDots();

//     });

//     // AUTOPLAY
//     function startAutoplay() {

//         autoplayInterval = setInterval(() => {

//             track.scrollBy({
//                 left: cardWidth,
//                 behavior: 'smooth'
//             });

//         }, 3000);

//     }

//     function stopAutoplay() {
//         clearInterval(autoplayInterval);
//     }

//     startAutoplay();

//     // PAUSE on hover
//     track.addEventListener('mouseenter', stopAutoplay);
//     track.addEventListener('mouseleave', startAutoplay);

//     // PAUSE on touch
//     track.addEventListener('touchstart', stopAutoplay);
//     track.addEventListener('touchend', startAutoplay);

// });