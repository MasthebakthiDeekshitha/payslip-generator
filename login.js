function login(){

    let adminId =
    document.getElementById("adminId").value;

    let password =
    document.getElementById("password").value;

    // SAMPLE LOGIN

    if(
        adminId === "admin"
        &&
        password === "admin123"
    ){

        // redirect
window.location.href="./dashboard.html";
    }
    else{

        document.getElementById("error").innerHTML =
        "Invalid Admin ID or Password";

    }

}