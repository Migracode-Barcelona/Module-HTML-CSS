// Close menu for mobile when user click on any link from menu
document.querySelectorAll(".nav-menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Uncheck the checkbox to hide the menu
    document.getElementById("menu-toggle").checked = false;
  });
});

// Scroll to top
let hideButtonTimeout;

window.onscroll = function() {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// fade-in effects on smaller screens
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
