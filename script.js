function rainfall() {
    const rain = document.createElement('div');
    rain.classList.add("rain")


    rain.style.left = Math.random() *100 + "vw"
    rain.style.animationDirection = Math.random() * 2 + 3
    rain.innerText = "|" 
    document.body.appendChild(rain)
    setTimeout(() => {
        rain.remove();

    }, 3000)
}
setInterval(rainfall,3)