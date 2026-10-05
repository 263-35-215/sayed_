const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", function () {

    document.querySelector("h1").innerText = "আমি জানতাম! 😂❤️";

    document.querySelector("p").innerText =
        "তুমি শেষ পর্যন্ত Yes-ই চাপলে! 😎";
});