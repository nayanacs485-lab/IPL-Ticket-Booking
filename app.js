// Select button
const bookBtn = document.getElementById("bookBtn");

// Select booking form
const bookingForm = document.getElementById("booking-form");


// Toast Function
function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#28a745";
    toast.style.color = "white";
    toast.style.padding = "15px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "1000";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}


// Smooth Scroll + Toast
bookBtn.addEventListener("click", () => {

    bookingForm.scrollIntoView({
        behavior: "smooth"
    });

    showToast("Redirecting to Booking Form!");
});
<button id="bookBtn">
    Book Now
</button>
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const totalPrice = document.getElementById("totalPrice");
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}
function updateSummary() {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.options[standSelect.selectedIndex].text;
    const quantity = Number(quantityInput.value);

    const standPrice = Number(standSelect.value);

    const total = standPrice * quantity;

    summaryMatch.textContent =
        "Match: " + selectedMatch;

    summaryStand.textContent =
        "Stand: " + selectedStand;

    summaryQuantity.textContent =
        "Tickets: " + quantity;

    totalPrice.textContent =
        "Total: ₹" + total;

    showToast("Booking Summary Updated!");
}
matchSelect.addEventListener("change", updateSummary);

standSelect.addEventListener("change", updateSummary);

quantityInput.addEventListener("change", updateSummary);
const filter = document.getElementById("teamFilter");

filter.addEventListener("change", () => {

  const selectedTeam = filter.value;
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    if (
      selectedTeam === "all" ||
      card.dataset.team === selectedTeam
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

});
const matchContainer =
  document.getElementById("matchContainer");

document
  .getElementById("gridBtn")
  .addEventListener("click", () => {

    matchContainer.style.display = "grid";

    matchContainer.style.gridTemplateColumns =
      "repeat(3,1fr)";
  });

document
  .getElementById("listBtn")
  .addEventListener("click", () => {

    matchContainer.style.display = "block";
  });
  const hamburger =
  document.getElementById("hamburger");

const navLinks =
  document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});