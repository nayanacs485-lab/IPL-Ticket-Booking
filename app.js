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