// Close menu for mobile when user click on any link from menu
document.querySelectorAll(".nav-menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Uncheck the checkbox to hide the menu
    document.getElementById("menu-toggle").checked = false;
  });
});

// Scroll to top
let hideButtonTimeout;

window.onscroll = function () {
  const button = document.getElementById("scrollToTopBtn");
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Show the button after 300px
  if (scrollPosition > 300) {
    button.classList.add("visible"); // Add visible class to show the button
    // Clear the previous timeout and set a new one to hide the button after 1.5 seconds of inactivity
    clearTimeout(hideButtonTimeout);
    hideButtonTimeout = setTimeout(() => {
      button.classList.remove("visible"); // Remove visible class after 1.5 seconds
    }, 1500);
  } else {
    button.classList.remove("visible"); // Remove visible class when scrolled back to top
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// fade-in effects on smaller screens
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});

// FAQ PAGE SCRIPT
// Function to toggle the answer
function toggleAnswer(questionElement) {
  let answerElement = questionElement.nextElementSibling;
  let isActive = answerElement.classList.contains("active");

  // Close all other active questions in the same section
  let allAnswers =
    questionElement.parentElement.parentElement.querySelectorAll(
      ".accordion-answer"
    );
  let allQuestions =
    questionElement.parentElement.parentElement.querySelectorAll(
      ".accordion-question"
    );

  allAnswers.forEach((answer) => {
    answer.classList.remove("active");
    answer.style.maxHeight = 0; // Reset max-height to 0 for transition
    answer.style.opacity = 0; // Reset opacity to 0 for transition
  });

  allQuestions.forEach((question) => question.classList.remove("active"));

  // Toggle the clicked question and answer
  if (!isActive) {
    questionElement.classList.add("active");
    answerElement.classList.add("active");
    answerElement.style.maxHeight = answerElement.scrollHeight + "px"; // Set max-height to its scroll height for transition
    answerElement.style.opacity = 1; // Make visible
  }
}

// Function to show only one section at a time
function showSection(section) {
  document.getElementById("general-accordion").style.display =
    section === "general" ? "block" : "none";
  document.getElementById("setup-accordion").style.display =
    section === "setup" ? "block" : "none";

  // Reset questions and answers on section switch
  let allQuestions = document.querySelectorAll(".accordion-question");
  let allAnswers = document.querySelectorAll(".accordion-answer");

  allQuestions.forEach((question) => question.classList.remove("active"));
  allAnswers.forEach((answer) => {
    answer.classList.remove("active");
    answer.style.maxHeight = 0; // Reset max-height to 0 for transition
    answer.style.opacity = 0; // Reset opacity to 0 for transition
  });

  // Open the first question of the visible section by default
  let firstQuestion = document.querySelector(
    `#${section}-accordion .accordion-question`
  );
  let firstAnswer = document.querySelector(
    `#${section}-accordion .accordion-answer`
  );

  firstQuestion.classList.add("active");
  firstAnswer.classList.add("active");
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
  firstAnswer.style.opacity = 1;

  // Manage active section styling
  document
    .getElementById("general-section")
    .classList.toggle("active-section", section === "general");
  document
    .getElementById("setup-section")
    .classList.toggle("active-section", section === "setup");
}

// Set the initial state on page load
window.onload = function () {
  showSection("general"); // Ensure General FAQs are visible by default
  // Open the first question of "Setting up FAQs" by default
  let firstSetupQuestion = document.querySelector(
    "#setup-accordion .accordion-question"
  );
  let firstSetupAnswer = document.querySelector(
    "#setup-accordion .accordion-answer"
  );

  firstSetupQuestion.classList.add("active");
  firstSetupAnswer.classList.add("active");
  firstSetupAnswer.style.maxHeight = firstSetupAnswer.scrollHeight + "px";
  firstSetupAnswer.style.opacity = 1;
};
