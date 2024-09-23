document.getElementById("btn-cashOut").addEventListener("click", function (event) {
    event.preventDefault()
    let withdrawAmount = inputValueUtility("inputField-cashOut");
    const inputFieldPinNumber = inputValueUtility("cashOut-inputField-pinNumber");

    // pin number validation
    if (inputFieldPinNumber === 999) {
        let currentBalance = inputTextUtility("current-balance");
        let newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {

            document.getElementById("current-balance").innerText = newBalance;

            // add transaction history
            const createDiv = document.createElement("div");
            createDiv.classList.add("max-w-md", "mx-auto", "p-6", "bg-red-500", "rounded-lg", "shadow-lg", "mt-10");
            createDiv.innerHTML = `
                <h4 class="text-xl font-bold mb-4 text-center">Cash Out</h4>
                <p>${withdrawAmount} taka added. New Balance ${newBalance}</p>
            `
            document.getElementById("tran-history-form").appendChild(createDiv);

        } else {
            alert("Insufficient Balance!")
        }

    } else {
        alert("Wrong Pin Number!")
    }
})