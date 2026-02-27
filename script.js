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










