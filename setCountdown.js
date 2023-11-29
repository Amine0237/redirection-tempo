function setCountdown(idj, idh, idm, ids, countDownDate, lien){
    let now = Date.now();

    let x = setInterval(function() {

        now = Date.now();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(idj).textContent = days;
        document.getElementById(idh).textContent = hours;
        document.getElementById(idm).textContent = minutes;
        document.getElementById(ids).textContent = seconds;

        if (distance < 0) {
            clearInterval(x);
            location.replace(lien)
        }
    }, 1000);
}