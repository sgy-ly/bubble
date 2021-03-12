function validate() {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    console.log(email.match(pattern));
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}