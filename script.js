const revealBtn = document.getElementById("rvlBtn");
const letterContainer = document.getElementById("letterContainer");

revealBtn.addEventListener("click", function(event) {
    event.preventDefault(); // prevents the link from jumping
    letterContainer.style.display = "block";
});

revealBtn.addEventListener("click", function(event) {
    event.preventDefault();
    letterContainer.classList.add("show");
});