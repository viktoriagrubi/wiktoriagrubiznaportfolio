const showMoreButtons = document.querySelectorAll(".show-more-btn");

showMoreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const description = btn.previousElementSibling;
    description.classList.toggle("expanded");

    btn.textContent = description.classList.contains("expanded")
      ? "Show less"
      : "Show more";
  });
});
