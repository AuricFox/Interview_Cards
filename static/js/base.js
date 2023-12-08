// Flashcard functions

var currentFlashcardIndex = 0;

function showFlashcard(index) {
    var flashcardQuestion = document.getElementById("front");
    var flashcardAnswer = document.getElementById("back");
    console.log("Flashcards:", flashcards);

    // Ensure the index is within bounds
    if (index >= 0 && index < flashcards['questions'].length) {
        var currentFlashcard = flashcards['questions'][index];

        // Flashcard question side
        flashcardQuestion.innerHTML = `
            <h2>Question</h2>
            <p>${currentFlashcard['question']}</p>
        `;

        // Flashcard Answer side
        flashcardAnswer.innerHTML = `
            <h2>Answer</h2>
            <p>${currentFlashcard['answer']}</p>
        `;

        currentFlashcardIndex = index;
    } else {
        // Optionally, handle out-of-bounds case
        flashcardContent.innerHTML = "<p>No more flashcards.</p>";
    }
}

function showNextFlashcard() {
    showFlashcard(currentFlashcardIndex + 1);
}

function showPreviousFlashcard() {
    showFlashcard(currentFlashcardIndex - 1);
}

function shuffleFlashcards() {
    // Shuffle the flashcards array
    flashcards = shuffleArray(flashcards);

    // Show the first flashcard in the shuffled order
    showFlashcard(0);
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array['questions'].length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array['questions'][i], array['questions'][j]] = [array['questions'][j], array['questions'][i]];
    }
    return array;
}

// Show the first flashcard when the page loads
showFlashcard(0);

// Animate flashcard so it rotates
document.getElementById('flashcard').addEventListener('click', function () {
    const cardContent = document.getElementById('cardContent');
    cardContent.style.transform = cardContent.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});