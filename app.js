// === LAMP TOGGLE ===
const cord = document.getElementById("cord");
const lamp = document.querySelector(".lamp");
const body = document.body;

cord.addEventListener("click", () => {
  cord.classList.add("pull");
  setTimeout(() => cord.classList.remove("pull"), 300);
  lamp.classList.toggle("on");
  body.classList.toggle("on");
});

// === LOGIN FORM SWEETALERT ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome back, ${username}!`,
        showConfirmButton: false,
        timer: 1500,
        background: "#1a1a1a",
        color: "#fff",
      }).then(() => {
        loginForm.reset();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please enter both username and password",
        showConfirmButton: true,
        background: "#111",
        color: "#fff",
      });
    }
  });
}

// === SIGNUP FORM SWEETALERT ===
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (fullname && email && password) {
      Swal.fire({
        title: "Signup Successful!",
        text: "Welcome " + fullname + " 🎉",
        icon: "success",
        confirmButtonColor: "#00b894",
        background: "#000", 
        color: "#fff", 
      }).then(() => {
        window.location.href = "index.html";
      });
    } else {
      Swal.fire({
        title: "Missing Fields",
        text: "Please fill out all fields!",
        icon: "error",
        confirmButtonColor: "#d63031",
        background: "#000", 
        color: "#fff", 
      });
    }
  });
}
