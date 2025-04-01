function myFunction() {
    const container1 = document.getElementById('container1');
    const loginForm = document.getElementById('loginForm');
    if (container1.style.display === "none" ) {
        container1.style.display = "block"
        loginForm.style.display = "none"
    }else{
        loginForm.style.display = "block"
        container1.style.display = "none"
    }
}
function goBack() {
    if (loginForm.style.display === "block") {
        cointainer1.style.display = "none"
    }else {
        cointainer1.style.display = "block"
        loginForm.style.display === "none"
    }
}
