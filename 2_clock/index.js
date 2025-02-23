setInterval(() => {
    const date = new Date();
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.rotate = `${(date.getHours() / 24) * 360 + 180}deg`
    const minuteHand = document.querySelector('.minute-hand');
    minuteHand.style.rotate = `${(date.getMinutes() / 60) * 360 - 180}deg`
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.rotate = `${(date.getSeconds() / 60) * 360 - 180}deg`

}, 1000)