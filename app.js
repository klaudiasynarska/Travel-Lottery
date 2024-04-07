const lotteryBtn = document.getElementById("lottery-btn");
const wishlistBtn = document.getElementById("wishlist-btn");
const initialElement = document.getElementById("initial");
const resultName = document.getElementById("result-name");
const resultImage = document.getElementById("result-image");

var wishlist = [];
var destination;

lotteryBtn.addEventListener("click", function () {
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
            destination = data[getRandomNumber(length)]
            resultName.innerText = destination["name"];
            resultImage.src = destination["media"]["flag"];
        })
        .catch(error => {
            console.log(error);
        });
});

wishlistBtn.addEventListener("click", function () {
    

    wishlist.push(destination);
    let ul = document.getElementById("wishlist-list");
    ul.innerHTML = "";

    wishlist.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item["name"];
        ul.appendChild(li);
    });
});

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}
