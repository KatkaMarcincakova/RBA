/*
document.addEventListener("DOMContentLoaded", function () {
    // Function to create a carousel
    function createCarousel(containerId) {
        const container = document.getElementById(containerId);
        const carousel = container.querySelector(".carousel");
        const carouselWrapper = container.querySelector(".carousel-wrapper");
        const prevBtn = container.querySelector(".prevBtn");
        const nextBtn = container.querySelector(".nextBtn");

        let currentIndex = 0;

        function updateCarousel() {
        const translateValue = -currentIndex * 100 + "%";
        carouselWrapper.style.transform = "translateX(" + translateValue + ")";
        }

        function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
        }

        function prevSlide() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
        }

        // Button click event listeners
        prevBtn.addEventListener("click", prevSlide);
        nextBtn.addEventListener("click", nextSlide);

        // Optional: Add event listeners for touch or swipe gestures
        let touchStartX;

        carousel.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
        });

        carousel.addEventListener("touchend", function (event) {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > 0) {
            prevSlide();
        } else if (deltaX < 0) {
            nextSlide();
        }
        });
    }

    // Create multiple carousels by calling the function for each container
    createCarousel("church");
    createCarousel("livity");
    createCarousel("mystical");
    createCarousel("muxly");
    createCarousel("msgorazd");
    createCarousel("zsgorazd");
    createCarousel("lstme");
});
*/