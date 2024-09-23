document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault()
    let inputValueAddAmount = inputValueUtility("inputField-addMoney")
    let inputValuePinNumber = inputValueUtility("inputField-pinNumber");

    // check pinNumber validity
    if (inputValuePinNumber === 999) {
        let curretBalance = inputTextUtility("current-balance");
        let newBalance = curretBalance + inputValueAddAmount;
        document.getElementById("current-balance").innerText = newBalance;

        // add transaction history
        const div = document.createElement("div");
        div.classList.add("max-w-md", "mx-auto", "p-6", "bg-sky-500", "rounded-lg", "shadow-lg", "mt-10");
        div.innerHTML = `
            <h4 class="text-xl font-bold mb-4 text-center">Add Money</h4>
            <p>${inputValueAddAmount} taka added. New Balance ${newBalance}</p>
        `
        document.getElementById("tran-history-form").appendChild(div);



    } else {
        alert("Pin Number incorrect!")
    }
});