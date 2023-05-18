const text = "This is the typewriter effect.";
let currentCharIndex = 0;
let timerId;

function typeCharacter() {
  const typewriterElement = document.getElementById("typewriter-text");
  typewriterElement.textContent += text[currentCharIndex];
  currentCharIndex++;

  if (currentCharIndex < text.length) {
    timerId = setTimeout(typeCharacter, 100); // Adjust typing speed here (in milliseconds)
  }
}

function startTypewriter() {
  clearTimeout(timerId);
  currentCharIndex = 0;
  document.getElementById("typewriter-text").textContent = "";
  typeCharacter();
}
