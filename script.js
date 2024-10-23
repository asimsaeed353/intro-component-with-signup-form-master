const form = document.getElementById("myForm");

// clear the error message when user starts typing in any input field
form.addEventListener("input", function (event) {
  const errorMessage = event.target.nextElementSibling;
  if (errorMessage) {
    errorMessage.textContent = "";
  }
});

// Validate on form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // clear previous error messages
  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach((msg) => (msg.textContent = ""));

  // Validate first name
  const firstName = document.getElementById("firstName").value;
  if (firstName.trim() === "") {
    document.getElementById("firstNameError").textContent =
      "First Name cannot be empty!";
    document.getElementById("firstName").placeholder = "";
  }

  // Validate last Name
  const lastName = document.getElementById("lastName").value;
  if (lastName.trim() === "") {
    document.getElementById("lastNameError").textContent =
      "Last Name cannot be empty!";
    document.getElementById("lastName").placeholder = "";
  }

  const emailInput = document.getElementById("email");

  // Validate email
  const email = document.getElementById("email").value;
  const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim() === "") {
    document.getElementById("emailError").textContent =
      "Email cannot be empty!";
    emailInput.placeholder = "";
  }

  // Validate email format
  else if (!emailExp.test(email)) {
    event.preventDefault();
    document.getElementById("emailError").textContent =
      "Looks like this is not an email!";
    emailInput.style.color = "hsl(0, 100%, 74%)";
  }

  // Change color of email input to original once user inputs email
  emailInput.addEventListener("input", () => {
    emailInput.style.color = "hsl(249, 10%, 26%)";
  });

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.trim() === "") {
    document.getElementById("passwordError").textContent =
      "Password cannot be empty!";
    document.getElementById("password").placeholder = "";
  }

  // change all border colours to red
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach(
    (input) => (input.style.border = "2px solid hsl(0, 100%, 74%)")
  );
  document.getElementById("button").style.border = "none";

  // Change the border to black (active-state) when user types in input
  allInputs.forEach((input) => {
    input.addEventListener("input", function () {
      input.style.border = "1px solid black";
      document.querySelector(`#${input.name}-icon`).style.display = "none";
    });
  });
});
