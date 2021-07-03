function heart() {
    const heart = document.createElement('div');
    heart.classList.add("heart")


    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDirection = Math.random() * 2 + 3
    heart.innerText = "❤️" + "i love you"
    document.body.appendChild(heart)
    setTimeout(() => {
        heart.remove();

    }, 3000)
}
setInterval(heart, 200)