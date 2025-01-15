// JavaScript to toggle the "liked" state
document.querySelector(".heart-container").addEventListener("click", function () {
  const heart = document.querySelector(".heart");
  heart.classList.toggle("liked"); // Toggle the "liked" class
});
