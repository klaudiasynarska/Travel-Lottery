const btn = document.getElementById("lottery-btn");
const lotteryResult = document.querySelector(".lottery-result");

btn.addEventListener("click", function () {
    lotteryResult.innerHTML = "";
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
            // loader.style.display = "none";

            let length = data.length;
            let destination = data[getRandomNumber(length)]
            lotteryResult.innerHTML = destination["name"];
            lotteryResult.innerHTML += "<img width=200 src=" + destination["media"]["flag"] + "></img>";
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
});

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}
