// function updateCountdown() {
//     const targetDate = new Date("2025-03-22T20:00:00");
//     const now = new Date();
//     const timeDifference = targetDate - now;

//     if (timeDifference > 0) {
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         document.getElementById("days").textContent = days;
//         document.getElementById("hours").textContent = hours;
//         document.getElementById("minutes").textContent = minutes;
//         document.getElementById("seconds").textContent = seconds;
//     } else {
//         document.getElementById("countdown").style.display = "none";
//         document.getElementById("message").style.display = "block";
//     }
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();

function updateCountdown() {
    const now = new Date();
    let targetDate = new Date("2025-03-22T20:00:00");

    // Jeśli aktualna data to 22 lutego 2025 po godzinie 17:00, zmień cel odliczania
    const switchDate = new Date("2025-02-22T17:00:00");
    if (now >= switchDate && now < new Date("2025-02-22T20:00:00")) {
        targetDate = new Date("2025-02-22T20:00:00");
    }

    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").style.display = "block";
    }
}

// Odświeżanie co sekundę
setInterval(updateCountdown, 1000);

// Wywołanie od razu po załadowaniu strony
updateCountdown();


document.addEventListener("DOMContentLoaded", function () {
    const notes = [
        { text: "Czy wiesz, że czas płynie szybciej, gdy jesteśmy szczęśliwi?", x: "10%", y: "20%" },
        { text: "To odliczanie prowadzi Cię do czegoś niezwykłego!", x: "70%", y: "30%" },
        { text: "Każda sekunda jest cenna. Spójrz, jak ucieka!", x: "20%", y: "70%" },
        { text: "Sekundy, minuty, godziny... ale to momenty są najważniejsze.", x: "80%", y: "80%" },
        { text: "Sekundy biegną, minuta po minucie zbliżamy się do chwili, która zmieni wszystko.", x: "0%", y: "50%" },
        { text: "Czas nie pyta, czy jesteśmy gotowi – on prowadzi nas prosto do przeznaczenia.", x: "50%", y: "80%" },
        { text: "Dziś jeszcze czekamy, jutro wspomnimy ten moment jako początek wieczności.", x: "60%", y: "20%" },
        { text: "Każde tyknięcie zegara to jedno uderzenie bliżej serca, które powie: 'tak'.", x: "75%", y: "60%" },
        { text: "Upływający czas nie zabiera niczego – on buduje napięcie przed najpiękniejszą chwilą.", x: "90%", y: "40%" },
        { text: "Noc odchodzi, dzień przychodzi… a w jego sercu czeka nasze przeznaczenie.", x: "85%", y: "75%" },
        { text: "To nie czas ucieka, to my zbliżamy się do chwili, którą będziemy pamiętać na zawsze.", x: "10%", y: "85%" },
        { text: "Czas odlicza sekundy, ale nasze serca odliczają marzenia do spełnienia.", x: "20%", y: "80%" },
        { text: "Każdy moment prowadzi nas do dnia, w którym wszystko stanie się jasne.", x: "45%", y: "15%" },
        { text: "Jeszcze chwila… jeszcze moment… i dzień, na który czekamy, stanie się rzeczywistością.", x: "65%", y: "70%" }
    ];

    const staticDots = [
        { x: "5%", y: "15%" }, { x: "30%", y: "10%" }, { x: "88%", y: "10%" },
        { x: "2%", y: "98%" }, { x: "5%", y: "54%" }, { x: "72%", y: "48%" },
        { x: "98%", y: "22%" }, { x: "42%", y: "90%" }, { x: "6%", y: "5%" },
        { x: "25%", y: "35%" }, { x: "58%", y: "15%" }, { x: "85%", y: "85%" }
    ];


    const colors = ["#ffaf7b"]; // Trzy kolory dopasowane do tła
    const noteContainer = document.getElementById("note-container");

    // Tworzenie interaktywnych kropek z notatkami
    notes.forEach(note => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("note-container");
        wrapper.style.position = "absolute";
        wrapper.style.left = note.x;
        wrapper.style.top = note.y;

        const dotElement = document.createElement("div");
        dotElement.classList.add("note-dot");

        const noteElement = document.createElement("div");
        noteElement.classList.add("note-card");
        noteElement.textContent = note.text;

        wrapper.appendChild(dotElement);
        wrapper.appendChild(noteElement);
        noteContainer.appendChild(wrapper);
    });

    // Tworzenie statycznych kropek z losowymi kolorami (z ograniczonej palety)
    staticDots.forEach(dot => {
        const staticDotElement = document.createElement("div");
        staticDotElement.classList.add("static-dot");

        // Ustawienie pozycji
        staticDotElement.style.left = dot.x;
        staticDotElement.style.top = dot.y;

        // Losowy wybór koloru z dopasowanej palety
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        staticDotElement.style.backgroundColor = randomColor;
        staticDotElement.style.boxShadow = `0 0 10px ${randomColor}`;

        noteContainer.appendChild(staticDotElement);
    });
    function adjustNotePosition(wrapper, noteElement) {
        const rect = noteElement.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        if (rect.right > screenWidth) {
            wrapper.style.left = `calc(${wrapper.style.left} - ${rect.width}px)`;
        }
        if (rect.bottom > screenHeight) {
            wrapper.style.top = `calc(${wrapper.style.top} - ${rect.height}px)`;
        }
    }
});

