document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("heading");
  const text = document.getElementById("text");

  heading.style.color = "blue";
  text.innerHTML += " This extra line was added by JavaScript!";
  console.log("JS file is working ✅");
});
