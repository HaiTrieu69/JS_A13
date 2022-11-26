const form = document.getElementById("contact-form");
form.onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const phone = document.getElementsByName("phone")[0].value;
    const opinion = document.getElementsByName("opinion")[0].value;

    const data = {
        name,
        email,
        phone,
        opinion
    };

    localStorage.setItem("data", JSON.stringify(data));
};