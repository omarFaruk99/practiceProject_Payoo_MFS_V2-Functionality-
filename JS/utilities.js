// for inputValue
function inputValueUtility(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


//for inputText
function inputTextUtility(id) {
    const inputText = document.getElementById(id).innerText
    const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;

}



// for feature Btn utility
function featureBtnUtility(id) {
    // hide all feature btn
    document.getElementById("add-money-form-input").classList.add("hidden");
    document.getElementById("cash-out-form-input").classList.add("hidden");
    document.getElementById("tran-history-form").classList.add("hidden");

    // unhide specific feature btn
    document.getElementById(id).classList.remove("hidden");
}