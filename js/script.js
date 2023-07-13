const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit-btn");
const small = document.querySelector("form small");

let emailRegex = /^[\w-\.]+@([\w-\.])+[\w-]{2,4}$/g;

const submitEmail = () => {
  if (emailInput.value === "") {
    small.classList.add("error");
  } else if (!emailInput.value.match(emailRegex)) {
    small.classList.add("error");
  } else {
    small.classList.remove("error");
    alert("Thank you for subscribing");
  }
};

submitBtn.addEventListener("click", submitEmail);
