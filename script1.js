function submitForm() {
     
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

     
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }
    if (password.trim() === "") {
        alert("Please enter your password.");
        return;
    }
    var saveCredentials = confirm("Do you want to save your ID and password?");
    if (saveCredentials) {
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Password: " + password);
    }
    
    alert("Form submitted successfully!");
    var username = encodeURIComponent(name);
    window.location.href = "index.html";
}