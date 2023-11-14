function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "mai" && password === "123") {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + username + "!");
        window.location.href = "http://127.0.0.1:5500/pagi.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos. ");
    }
}





