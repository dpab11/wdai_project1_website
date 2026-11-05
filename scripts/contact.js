const form = document.getElementById("contact_form");

const showErrorMessage = (id, text) => {
  document.getElementById(id).textContent = text;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelectorAll(".error_message").forEach((el) => {
    el.textContent = "";
  });

  let passed = true;
  //title
  const title = document.getElementById("title").value;
  if (title === "") {
    showErrorMessage("title_error", "Choose title from the list");
    passed = false;
  }

  //email
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email = document.getElementById("email").value.trim();

  if (email === "") {
    showErrorMessage("email_error", "Email is required");
    passed = false;
  } else if (!emailPattern.test(email)) {
    showErrorMessage("email_error", "Email is invalid");
    passed = false;
  }

  //phone
  const phonePattern = /^[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{3}$/;
  const phone = document.getElementById("phone").value.trim();
  if (phone === "") {
    showErrorMessage("phone_error", "Phone number is required");
    passed = false;
  } else if (!phonePattern.test(phone)) {
    showErrorMessage("phone_error", "Phone number is invalid");
    passed = false;
  }

  //message
  const message = document.getElementById("message").value;
  if (message === "") {
    showErrorMessage("message_error", "Please enter a message");
    passed = false;
  }

  if (passed) {
    const info = document.getElementById("submit_info");
    info.textContent = "Submitted successfully!";
    setTimeout(() => {
      info.textContent = "";
    }, 3000);

    form.reset();
  }
});
