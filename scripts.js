
document.getElementById("btn").onclick = function () {
    let r = randomIntFromInterval(0, 255);
    let g = randomIntFromInterval(0, 255);
    let b = randomIntFromInterval(0, 255);
    console.log(r,g,b);
    changeRgbText(r,g,b);
    document.body.style.background = "rgb("+r+","+g+","+b+")";
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function changeRgbText(r, g, b) {
    document.getElementById("p1").innerHTML = "R: "+r+" "+"G: "+g+" "+"B: "+b;
}