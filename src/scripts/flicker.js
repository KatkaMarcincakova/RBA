const heroText = document.getElementById('heroText');

setInterval(() => {
    // Get a random letter
    const randomLetterIndex = Math.floor(Math.random() * heroText.children.length);
    const randomLetter = heroText.children[randomLetterIndex];

    // Toggle between the flicker class and change font class
    randomLetter.classList.toggle('flicker');
    randomLetter.classList.toggle('font1');
    randomLetter.classList.toggle('font2');
}, 500);