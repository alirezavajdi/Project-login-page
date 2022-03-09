const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const siginBtn = document.querySelector(".signin-button");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");

siginBtn.addEventListener("click", signIn);

function signIn(event) {
  event.preventDefault();

  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;
  usernameMsg.innerText = "";
  passwordMsg.innerText = "";

  if (usernameValue.length === 0 | usernameValue.indexOf("admin") === -1) {
    usernameMsg.innerHTML = "نام کاربری اشتباه است ";
  }
  if (passwordValue.length === 0 | passwordValue.indexOf("admin") === -1){
    passwordMsg.innerHTML = "کلمه عبور اشتباه است ";
  }

  if (usernameValue == "admin" && passwordValue == "admin" ) {
    window.location.href = 'file:///C:/Users/Asus/Desktop/task_1_javascript/shoping.html'
  }
}
