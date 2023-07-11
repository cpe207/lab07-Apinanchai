const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const submitBtn = document.querySelector("#submit-btn");
const passWordInput = document.querySelector("#password-input");
const EmailInput = document.querySelector("#email-input");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};
passWordInput.onkeyup = () => {
  passWordInput.classList.remove("is-valid");
  passWordInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isfirstNameok = false;
  let CheackFirstName = false;
  let CheackLastName = false;
  let CheackEmail = false;
  let Cheackpassword = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    CheackFirstName = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    CheackLastName = true;
  }

  if (validateEmail(EmailInput.value) === true) {
    EmailInput.classList.add("is-valid");
    CheackEmail = true;
  } else {
    EmailInput.classList.add("is-invalid");
  }

  if (passWordInput.value.length >= 6) {
    passWordInput.classList.add("is-valid");
    Cheackpassword = true;
  } else {
    passWordInput.classList.add("is-invalid");
  }

  if (Cheackpassword && CheackFirstName && CheackLastName && CheackEmail) {
    alert("Registered successfully");
  }
};
