const btn = document.getElementById("lottery-btn");
const initialElement = document.getElementById("initial");
const resultName = document.getElementById("result-name");
const resultImage = document.getElementById("result-image");

btn.addEventListener("click", function () {
    initialElement.style.display = "none";
    // lotteryResult.innerHTML = "";
    // let loader = document.querySelector(".loader");
    // loader.style.display = "inline";

    // setTimeout(function () {
    //     let destination = destinations[getRandomNumber()];
    //     lotteryResult.innerHTML = "<h2>" + destination["name"] + "</h2>";
    //     lotteryResult.innerHTML += "<img width=200 src=" + destination["image_url"] + "></img>";
    //     loader.style.display = "none";
    //     btn.textContent = "Try again";
    // }, 2000);

    fetch("https://api.sampleapis.com/countries/countries")
        .then(response => {
            console.log("fetched");
            if (!response.ok) {
                throw new Error("Fetch error");
            }
            return response.json();
        })
        .then(data => {
            let length = data.length;
            let destination = data[getRandomNumber(length)]
            resultName.innerText = destination["name"];
            resultImage.src = destination["media"]["flag"];
        })
        .catch(error => {
            console.log(error);
        });
});

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}
