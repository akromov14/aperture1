let click1 = document.getElementById('click');
let resDiv = document.getElementById('resDiv');
let close1 = document.getElementById('close');

click1.addEventListener("click", () => {
    resDiv.classList.toggle('nimadir')
})

close1.addEventListener("click", () => {
    resDiv.classList.remove('nimadir')
})