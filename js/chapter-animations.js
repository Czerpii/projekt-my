function changeSlide(event) {
    const currentSlide = event.target.closest('.chapter-container'); // Znajduje obecny slajd
    const nextSlideId = event.target.getAttribute('data-target'); // Pobiera ID następnego slajdu
    const nextSlide = document.getElementById(nextSlideId); // Znajduje następny slajd

    if (currentSlide && nextSlide) {
        // Animacja wyjazdu aktualnego slajdu
        currentSlide.style.animation = 'slideOutLeft 1s ease-in-out forwards';

        setTimeout(() => {
            currentSlide.style.display = 'none';

            // Pokazanie nowego slajdu
            nextSlide.style.display = 'flex';
            nextSlide.style.animation = 'slideInRight 1s ease-in-out forwards';
        }, 1000);
    }
}

function resetCard(card) {
    card.style.transition = "none";
    card.style.transform = "translateX(0) rotate(0)";
    card.style.display = "flex";
}

function likeCard(event) {
    const card = event.target.closest('.swipe-card');
    const nextSlideId = event.target.getAttribute('data-target'); // Pobiera ID następnego slajdu

    card.style.transition = "transform 0.5s ease-out";
    card.style.transform = "translateX(300px) rotate(20deg)";

    setTimeout(() => {
        changeSlide({ target: document.querySelector(`[data-target="${nextSlideId}"]`) });
    }, 500);
}

function dislikeCard(event) {
    const card = event.target.closest('.swipe-card');

    card.style.transition = "transform 0.5s ease-out";
    card.style.transform = "translateX(-300px) rotate(-20deg)";

    setTimeout(() => resetCard(card), 500); // Karta wraca po chwili
}

// Dodanie event listenerów po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
    // Obsługa przycisków nawigacyjnych dla slajdów
    document.querySelectorAll(".next-btn").forEach(button => {
        button.addEventListener("click", changeSlide);

    });
    document.querySelectorAll(".next-slide").forEach(button => {
        button.addEventListener("click", changeSlide);

    });

    // Obsługa przycisków na karcie Tinderowej
    document.querySelector(".like-btn").addEventListener("click", likeCard);
    document.querySelector(".dislike-btn").addEventListener("click", dislikeCard);
});


document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");
    const closeButton = document.querySelector(".close-btn");

    popup.style.display = "none"; // Ukrywamy modal
    timelineItems.forEach(item => {
        item.addEventListener("click", function () {
            const imageSrc = item.getAttribute("data-image");
            const textContent = item.getAttribute("data-text");

            // Jeśli wydarzenie ma zdjęcie, wyświetl je
            if (imageSrc && imageSrc.trim() !== "") {
                popupImage.src = imageSrc;
                popupImage.style.display = "block"; // Pokaż obrazek
            } else {
                popupImage.style.display = "none"; // Ukryj obrazek, jeśli brak
            }

            popupText.textContent = textContent || "Brak opisu wydarzenia"; // Domyślny tekst

            popup.style.display = "flex"; // Pokaż popup
        });
    });

    // Zamknięcie popupu po kliknięciu w przycisk zamykania
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Zamknięcie popupu po kliknięciu poza jego obszarem
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".nxt-btn");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
