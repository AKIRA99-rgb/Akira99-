
function login(e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === "akira" && pass === "99") {
    window.location.href = "painel.html";
  } else {
    document.getElementById('error').innerText = "Usuário ou senha incorretos.";
  }
}
