// const carousel = document.getElementById('carousel');
//         const indicators = document.querySelectorAll('.indicator');
//         let currentIndex = 0;
//         const totalSlides = carousel.children.length;

//         function updateCarousel() {
//             carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
//             indicators.forEach((indicator, index) => {
//                 indicator.classList.toggle('bg-gray-800', index === currentIndex);
//                 indicator.classList.toggle('bg-gray-300', index !== currentIndex);
//             });
//         }

//         function autoSlide() {
//             currentIndex = (currentIndex + 1) % totalSlides;
//             updateCarousel();
//         }

//         indicators.forEach((indicator, index) => {
//             indicator.addEventListener('click', () => {
//                 currentIndex = index;
//                 updateCarousel();
//             });
//         });

//         setInterval(autoSlide, 3000);
//         updateCarousel();

// Initialization for ES Users
import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });