const submitSignUpForm = () => {
  const name = document.querySelector("#name-text-box").value;
  const password = document.querySelector("#password-text-box").value;
  const confirmPasswordContainer = document.querySelector(
    "#confirm-password-text-box"
  ).value;
  const errorContainer = document.querySelector("#error-container");

  if (name.match(" ")) {
    errorContainer.innerText = "username shouldn't contain spaces";
    errorContainer.classList.remove("hide");
    return;
  }

  if (password !== confirmPasswordContainer) {
    errorContainer.innerText = "Passwords doesn't match";
    errorContainer.classList.remove("hide");
    return;
  }

  const request = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name, password }),
  };

  fetch("/sign-up", request).then(res => {
    if (res.status === 201) {
      location.replace("/sign-in");
      return;
    }
    alert("Username Already Exists");
  });
};

const main = () => {
  const signUpForm = document.querySelector("#sign-up-form");

  signUpForm.onsubmit = event => {
    event.preventDefault();

    submitSignUpForm();
  };
};

window.onload = main;
