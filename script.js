
// Function to search within the Quran text
function searchQuran() {
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    let searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';  // Clear previous results

    // Loop through the Quran text and display matching verses
    let quranText = [
        { surah: 1, verse: 1, text: "In the name of Allah, the Most Gracious, the Most Merciful" },
        { surah: 2, verse: 255, text: "Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence." },
        { surah: 112, verse: 1, text: "Say, 'He is Allah, [Who is] One," },
        // Add more verses as needed
    ];

    quranText.forEach(entry => {
        if (entry.text.toLowerCase().includes(searchQuery)) {
            let resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `<strong>Surah ${entry.surah}:${entry.verse}</strong> - ${entry.text}`;
            searchResults.appendChild(resultItem);
        }
    });

    if (searchResults.innerHTML === '') {
        searchResults.innerHTML = 'No results found.';
    }
}

// Function to play Quran recitation audio
function playAudio() {
    let audio = new Audio('path/to/quran_audio.mp3');  // Replace with actual audio file path
    audio.play();
}

// Function to load Qaidah lessons
function loadQaidahLessons() {
    let qaidahContainer = document.getElementById('qaidahLessons');
    let qaidahLessons = [
        { lesson: 1, text: "Lesson 1: The Arabic Alphabet" },
        { lesson: 2, text: "Lesson 2: Joining Letters" },
        // Add more lessons as needed
    ];

    qaidahLessons.forEach(lesson => {
        let lessonItem = document.createElement('div');
        lessonItem.classList.add('qaidah-entry');
        lessonItem.innerHTML = `<strong>Lesson ${lesson.lesson}</strong>: ${lesson.text}`;
        qaidahContainer.appendChild(lessonItem);
    });
}

// Call the function to load Qaidah lessons on page load
window.onload = function() {
    loadQaidahLessons();
};
