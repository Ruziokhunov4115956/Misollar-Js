const input = document.getElementById("input");
const checkOne = document.getElementById("checkOne");
const checkTwo = document.getElementById("checkTwo");
const span = document.getElementById("span");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputresult = input.value;
    let checkrain = checkOne.checked;
    let checkrun = checkTwo.checked;

    if (inputresult === "") span.innerHTML = "Fill in the input"
    else if (inputresult >= 5 && inputresult <= 30 && !checkrain) span.innerHTML = "Yes, let's run"
    else if (inputresult >= 5 && inputresult <= 30 && checkrain && checkrun) span.innerHTML = "Yes, let's run"
    else span.innerHTML = "No, we can't run today"

});



