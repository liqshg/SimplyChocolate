const track = document.getElementById('track');
const dotsContainer = document.getElementById('dots');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;
let autoPlayInterval;
let originalCount;
let allDots;
let gap = 20;

    
    let currentSlidesContainer = document.getElementById("slider-product");
    let currentSlidesContainerWidth = currentSlidesContainer.getBoundingClientRect().width;
    let fullSlides = Math.floor((currentSlidesContainerWidth + gap) / (cards[0].getBoundingClientRect().width + gap));

    console.log("fullSlides: ", fullSlides);

    //currentSlidesContainer.style.width = (fullSlides * (cards[0].getBoundingClientRect().width + gap)) + "px";
    // track.style.paddingLeft = gap/2 + "px";
    //track.style.paddingLeft = "0px";
    let countSlides = cards.length;

    originalCount = countSlides - fullSlides + 1; 
    originalCount = 8
    

    // Создаем 8 точек
    dotsContainer.innerHTML = ''; // Очищаем контейнер для точек
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

    allDots = document.querySelectorAll('.dot');
 


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
//window.addEventListener('resize', initSlider);


// N
// E
// W
// S
// L
// I
// D
// E
// R



const track2 = document.getElementById('track2');
const dotsContainer2 = document.getElementById('dots2');
const cards2 = document.querySelectorAll('.modal_window-cards-card2');
let currentIndex2= 0;
let autoPlayInterval2;
let originalCount2;
let allDots2;
let gap2 = 20;

    

    let countSlides2 = cards2.length;


    originalCount2 =3
    

    // Создаем 8 точек
    dotsContainer2.innerHTML = ''; // Очищаем контейнер для точек
    for (let i = 0; i < originalCount2; i++) {
        const dot2 = document.createElement('div');
        dot2.classList.add('dot2');
        if (i === 0) dot2.classList.add('active');
        
        dot2.onclick = () => {
            if (i === originalCount2 - 1 && currentIndex2 === originalCount2 - 1) {
                currentIndex2 = 0; 
            } else {
                currentIndex2 = i; 
            }
            console.log("dot2 clicked, index: ", i);
            updateSlider2();
            resetAutoPlay2();
        };
        dotsContainer2.appendChild(dot2);
    }

    allDots2 = document.querySelectorAll('.dot2');
 


function updateSlider2() {
    const cardWidth = cards2[0].getBoundingClientRect().width + 20; 
    track2.style.transition = "transform 0.5s ease-in-out";
    track2.style.transform = `translateX(-${currentIndex2 * cardWidth}px)`;
    
    allDots2.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex2);
    });
}

// // --- 1. АВТОМАТИЧЕСКОЕ ЛИСТАНИЕ ---
function startAutoPlay2() {
    autoPlayInterval2 = setInterval(() => {
        currentIndex2++;
        if (currentIndex2 >= originalCount2) {
            currentIndex2 = 0; 
        }
        updateSlider2();
    }, 3000);
}

function resetAutoPlay2() {
    clearInterval(autoPlayInterval2);
    startAutoPlay2();
}

startAutoPlay2();

// --- 2. ИСПРАВЛЕННОЕ ЛИСТАНИЕ МЫШКОЙ ---
let isDragging2 = false;
let startX2 = 0;
let currentX2 = 0;

// Убираем стандартное поведение картинок, чтобы они не мешали тянуть
track2.querySelectorAll('img').forEach(img => {
    img.draggable = false;
});

track2.style.cursor = "grab";
track2.style.userSelect = "none"; // Чтобы текст не выделялся

track2.addEventListener('mousedown', (e) => {
    isDragging2 = true;
    startX2 = e.pageX;
    track2.style.cursor = "grabbing";
    track2.style.transition = "none"; // Отключаем плавность пока тянем
    clearInterval(autoPlayInterval2); 
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging2) return;
    e.preventDefault(); // Важно! Останавливает выделение и перетаскивание браузером
    currentX2 = e.pageX;
    const diff = currentX2 - startX2;
    
    const cardWidth = cards2[0].getBoundingClientRect().width + 20;
    const currentTranslate = -(currentIndex2 * cardWidth) + diff;
    
    // Двигаем трек вслед за мышкой в реальном времени
    track2.style.transform = `translateX(${currentTranslate}px)`;
});

window.addEventListener('mouseup', (e) => {
    if (!isDragging2) return;
    isDragging2 = false;
    track2.style.cursor = "grab";
    
    const diff = e.pageX - startX2;

    // Если протащили больше чем на 100px — листаем
    if (diff < -100 && currentIndex2 < originalCount2 - 1) {
        currentIndex2++;
    } else if (diff > 100 && currentIndex2 > 0) {
        currentIndex2--;
    }
    
    updateSlider2(); // Возвращаем плавность и фиксируем позицию
    startAutoPlay2();
    
    
});

window.addEventListener('resize', updateSlider2);
//window.addEventListener('resize', initSlider);

















