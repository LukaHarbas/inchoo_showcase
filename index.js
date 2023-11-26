const formButton = document.getElementById("shipping-tax-form-button");
const form = document.getElementById("shipping-tax-form");

formButton.addEventListener("click", toggleForm);

function toggleForm() {
    formButton.classList.toggle("active");
    form.classList.toggle("active");
}