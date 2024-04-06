const btn = document.getElementById("lottery-btn");
const lotteryResult = document.querySelector(".lottery-result");
const destinations = ["Poland", "USA", "Spain", "France",];

btn.addEventListener("click", function () {
    let destination = destinations[getRandomNumber()];
    lotteryResult.innerHTML = "<h2>" + destination + "</h2>";
});

function getRandomNumber() {
    return Math.floor(Math.random() * destinations.length);
}
