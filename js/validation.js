const questions = {
    "login": { answer: "01-01-2021", nextPage: "chapter1.html", requiresDateValidation: true },
    "chapter1_end": { answer: "Muszyna", nextPage: "chapter2.html", requiresDateValidation: false },
    "chapter2_end": { answer: "", nextPage: "chapter3.html", requiresDateValidation: false },
};

function validateDateFormat(date) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(date);
}
function shakeInput() {
    document.querySelector('#answer').classList.add('error-shake');
    setTimeout(() => {
        document.querySelector('#answer').classList.remove('error-shake');
    }, 300);
}

function checkPassword(questionsKey) {
    const userAnswer = document.querySelector('#answer').value.trim();
    const errorMessage = document.querySelector('.error-message');
    const questionData = questions[questionsKey];

    // Sprawdzamy, czy pytanie wymaga walidacji formatu daty
    if (questionData.requiresDateValidation && !validateDateFormat(userAnswer)) {
        errorMessage.textContent = "Podaj datę w formacie dd-mm-yyyy!";
        errorMessage.style.display = 'block';
        shakeInput();
        return;
    }

    if (userAnswer === questions[questionsKey].answer) {
        localStorage.setItem("unlockedChapter", questions[questionsKey].nextPage);
        window.location.href = questions[questionsKey].nextPage;
    }
    else {
        errorMessage.style.display = 'block';
        shakeInput();
    }
}
function skipToNextChapter(questionsKey) {
    const questionData = questions[questionsKey];

    if (!questionData || !questionData.nextPage) {
        console.error("Niepoprawny klucz pytania lub brak strony docelowej.");
        return;
    }

    localStorage.setItem("unlockedChapter", questionData.nextPage);
    window.location.href = questionData.nextPage;
}

function checkProgress() {
    const lastUnlockedChapter = localStorage.getItem("unlockedChapter");
    const currentPath = window.location.pathname.split('/').pop(); // Pobiera ostatni fragment URL-a
    if (lastUnlockedChapter && (currentPath === "" || currentPath === "index.html")) {
        window.location.href = lastUnlockedChapter;
    }
}


