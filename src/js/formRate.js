const form = document.forms.rateForm;
const cardRate = document.querySelector("main #card-rate");
const feedback = document.querySelector("main #card-rate .form-feedback");
const cardThank = document.querySelector("main #card-thank");
const result = document.querySelector("main #card-thank .result span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let value = formData.get("rate");

  if (value != null) {
    result.innerText = value;
    cardRate.style.display = "none";
    cardThank.style.display = "block";
  } else {
    feedback.style.visibility = "visible";
  }
});
