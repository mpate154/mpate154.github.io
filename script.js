//For hero section typing effect

document.addEventListener("DOMContentLoaded", function () {
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
});

//For project tabs
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

//For education drop down
function toggleDetails(courseId) {
  var details = document.getElementById(courseId);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

//For education drop down arrow
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".course-title").forEach((item) => {
    item.addEventListener("click", (event) => {
      const details = event.currentTarget.nextElementSibling;
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
      } else {
        details.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownTitles = document.querySelectorAll(".course-title");

  dropdownTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const arrow = title.querySelector(".fa-chevron-down");
      const content = title.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });
});
