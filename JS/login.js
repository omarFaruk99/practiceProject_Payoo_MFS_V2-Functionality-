
// step -1 : set event handler
document.getElementById("btn-login").addEventListener("click", function (event) {
    /* 
    Form Submission: When a form is submitted, the default behavior is to refresh the page. 
    Using event.preventDefault() allows you to handle the form submission with JavaScript without reloading the page.
    */
    //    step -2: prevent default behaviour(prevent reloading browser)
    event.preventDefault();

    // step -3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinCode = document.getElementById("pin-code").value;

    // step -4 : check validate()
    if (phoneNumber === "017" && pinCode === "999") {
        // link to home.html file
        window.location.href = "home.html";
    } else {
        alert("correct you phone or pin")
    }

})