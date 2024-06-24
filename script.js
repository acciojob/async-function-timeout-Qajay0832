//your JS code here. If required.
let text = document.querySelector("#text");
let delay = document.querySelector("#delay");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");



function Promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.value);
        }, delay.value)
    })
}
async function showOutput() {
    let res = await Promise1();
	output.textContent=res;
}

btn.addEventListener("click", showOutput)