const phrases = [
  " Maya Patel",
  " a CS student at Stevens Institute",
  " an aspiring data visualizer",
  " an avid learner",
  " an innovator",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
const typingSpeed = 65;
const delayBetweenPhrases = 2000; // Delay between each phrase completion

function loop() {
  const typedTextElement = document.getElementById("typed-text");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typedTextElement.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j >= 0) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      typedTextElement.innerHTML = currentPhrase.join("");
    }

    if (!isDeleting && j === phrases[i].length) {
      setTimeout(() => (isDeleting = true), delayBetweenPhrases);
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
  setTimeout(loop, speed);
}

loop();

function showTabContent(event, tabName) {
  var i, tabContent, tabLinks;

  // Hide all tab content
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove 'active' class from all tab links
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the current tab and add 'active' class to the clicked tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}
