// Wait until the entire page content is loaded
window.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card");

  // Add the 'show' class to trigger the CSS animation
  if (card) {
    card.classList.add("show");
  }
});
