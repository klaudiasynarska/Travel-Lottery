const btn = document.getElementById("lottery-btn");
const lotteryResult = document.querySelector(".lottery-result");

const poland = {
    "name": "Poland",
    "image_url": "https://study.gov.pl/sites/default/files/maksym-harbar-okn8zijpmxi-unsplash.jpg",
};

const spain = {
    "name": "Spain",
    "image_url": "https://www.kiwi.com/tips/wp-content/uploads/2023/02/spain-valencia-castle-pope-luny-1-scaled.jpg",
};

const destinations = [poland, spain];

btn.addEventListener("click", function () {
    lotteryResult.innerHTML = "";
    let loader = document.querySelector(".loader");
    loader.style.display = "inline";

    setTimeout(function () {
        let destination = destinations[getRandomNumber()];
        lotteryResult.innerHTML = "<h2>" + destination["name"] + "</h2>";
        lotteryResult.innerHTML += "<img width=200 src=" + destination["image_url"] + "></img>";
        loader.style.display = "none";
        btn.textContent = "Try again";
    }, 2000);
});

function getRandomNumber() {
    return Math.floor(Math.random() * destinations.length);
}
