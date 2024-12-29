document.addEventListener("DOMContentLoaded", function () {
  // Detect when user scrolls down
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Change to when you'd like the background to switch
      document.body.classList.add("scrolled");
      navbar.classList.add("sticky");
      header.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // Optional lightening effect
    } else {
      document.body.classList.remove("scrolled");
      navbar.classList.remove("sticky");
      header.style.backgroundColor = "transparent"; // Background goes back to transparent
    }
  });

  // Form Submission Logic (unchanged)
  document.getElementById("planner-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get the user input
    const tripDetails = document.getElementById("trip-details").value;

    // Use regular expressions to extract keywords from the sentence
    const destinationMatch = tripDetails.match(/to\s([\w\s]+)/i); // Extracts destination after 'to'
    const daysMatch = tripDetails.match(/(\d+)\s?(day|days)/i); // Extracts number of days
    const budgetMatch = tripDetails.match(/\$?(\d+)\s?(budget)?/i); // Extracts budget

    // Extracted values (default to 'Not specified' if no match)
    const destination = destinationMatch ? destinationMatch[1].trim() : "Not specified";
    const days = daysMatch ? daysMatch[1] : "Not specified";
    const budget = budgetMatch ? `$${budgetMatch[1]}` : "Not specified";

    // Generate itinerary based on extracted information
    const itinerary = `
      <h3>Your Trip Plan:</h3>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Duration:</strong> ${days} days</p>
      <p><strong>Budget:</strong> ${budget}</p>
    `;

    // Display the itinerary with animation
    const itineraryContainer = document.getElementById("itinerary");
    itineraryContainer.innerHTML = itinerary;
    itineraryContainer.style.opacity = 0; // Start hidden
    itineraryContainer.style.transition = "opacity 0.5s ease-in-out"; // Smooth fade-in
    setTimeout(() => {
        itineraryContainer.style.opacity = 1; // Fade in
    }, 100); // Delay to allow transition
  });

  // Dark Mode Toggle (unchanged)
  const darkModeButton = document.getElementById("dark-mode-button");
  darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const nav = document.querySelector("nav");
    nav.classList.toggle("dark-mode");
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.toggle("dark-mode"));
  });

  // Slide-in form on page load (unchanged)
  const form = document.querySelector("form");
  setTimeout(() => {
      form.classList.add("visible");
  }, 500); // Delay to allow smooth animation
});

// Sticky navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener("scroll", function () {
  const plane = document.getElementById("scrolling-plane");
  const landingButton = document.getElementById("use-ai-planner");

  if (!plane || !landingButton) return; // Ensure elements exist

  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Move the plane horizontally and vertically
  const planeHorizontalPosition = scrollPosition * 0.3; // Horizontal speed
  const planeVerticalPosition = scrollPosition * 0.1; // Vertical speed

  // Apply translation to the plane
  plane.style.transform = `translate(${planeHorizontalPosition}px, ${planeVerticalPosition}px)`;

  // Check if the plane reaches the button
  const buttonRect = landingButton.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (buttonRect.top >= 0 && buttonRect.top <= viewportHeight / 2) {
    // Center of the button for precise landing
    const buttonCenterX = buttonRect.left + buttonRect.width / 2 - 50; // 50 = half plane width
    const buttonCenterY = buttonRect.top + buttonRect.height / 2 - 50; // 50 = half plane height

    // Land the plane on the button
    plane.style.transform = `translate(${buttonCenterX}px, ${scrollPosition + buttonCenterY}px)`;
    plane.style.transition = "transform 0.5s ease-out"; // Smooth landing animation
  }
});

