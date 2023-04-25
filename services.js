function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("myForm3").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
  document.getElementById("myForm3").style.display = "none";
  document.getElementById("myForm").style.display = "none";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}

function openForm3() {
  document.getElementById("myForm3").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm2").style.display = "none";
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}

const loginForm = document.getElementById("login-home");
const loginButton = document.getElementById("submit-home");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Kanha" && password === "1234") {
        alert("You have successfully logged in.");
        location.href = "/admin";
    } else {
      alert("Incorrect id or password!");
      location.reload();
    }
})



