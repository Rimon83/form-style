// make sure the phone number follow the regex rules
let input = document.querySelector("#phoneNum");
input.addEventListener("input", (event) => {
  const regexCheck = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  let phone = input.value;
  let format = document.querySelector(".phoneFormat");
  let found = regexCheck.test(phone);
  if (!found && phone.length) {
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

// change  phone number format
let form = document.querySelector(".phoneForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const regex = /[()-. ]/g;
  const phone = input.value;
  const phoneSaved = phone.replaceAll(regex, "");

});

// make sure the email follow the regex rules
let email = document.querySelector("#email");
email.addEventListener("input", (event) => {
  const regex = /^[A-Za-z0-9.-_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g;
  const emailValue = email.value;
  const found = regex.test(emailValue);
  let format = document.querySelector(".emailFormat");
  if (!found && emailValue.length) {
    email.classList.add("invalid");
    format.classList.add("block");
  } else {
    email.classList.remove("invalid");
    format.classList.remove("block");
  }
});

//format the user input in text area
let textArea = document.querySelector(".phoneForm");
textArea.addEventListener("submit", (event) => {
  event.preventDefault();
  const regex = / {2,}/g;
  const textValue = document.querySelector("#textArea").value;
  const format = textValue.replaceAll(regex, " ");
  console.log(format);
});
