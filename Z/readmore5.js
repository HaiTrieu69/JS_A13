const form = document.getElementById("customer_login");
form.onsubmit = function (event) {
    event.preventDefault();
    const email = document.getElementsByName("email")[0].value;
    const data = {
        email
    };
    localStorage.setItem("data", JSON.stringify(data));
};