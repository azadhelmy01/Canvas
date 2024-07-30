let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvasHeight = 100;
let canvasWidth = 100;
let midOfX = canvasHeight / 2;
let midOfY = canvasHeight / 2;
let displayBtn = document.getElementById("dsplyBtn")

let squareColr = document.getElementById("sqrClr")
let circleColr = document.getElementById("circClr")
let triColr = document.getElementById("triClr")




function drawSquare(color) {
    color = squareColr.value
    ctx.fillStyle = color;
    ctx.fillRect(25, 25, 50, 50);

}


function drawTriangle(color) {
    color = triColr.value
    ctx.beginPath();
    ctx.lineTo(0, 100);
    ctx.lineTo(50, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    return color


}


function drawCircle(color) {
    color = circleColr.value
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, 2 * Math.PI);
    ctx.stroke()
    ctx.fill();
    return color



}



displayBtn.addEventListener("click", display)
let output = document.getElementById("output")

let count = 0
function display() {
    ctx.clearRect(0, 0, 100, 100)
    if (count == 0) {
        drawSquare();
        count = count + 1

    }
    else if (count == 1) {
        drawCircle();
        count = count + 1

    }
    else if (count == 2) {
        drawTriangle();
        count = count - 2
    }
    output.textContent = "The colors are " + squareColr.value + " and " + circleColr.value + " and " + triColr.value

}

let time = 0;
let timer = null;


let alternateBtn = document.getElementById("altern8")
let stopAltern8 = document.getElementById("stopAltern8")


alternateBtn.addEventListener("click", startTimer);
function startTimer() {
    if (timer === null) {
        timer = setInterval(theTimer, 1000);
    }
    output.textContent = "The colors are " + squareColr.value + " and " + circleColr.value + " and " + triColr.value



}
stopAltern8.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;

});


function theTimer() {
    ctx.clearRect(0, 0, 100, 100)
    time = time + 1;
    if (time == 1) {
        drawSquare("red");

    }
    else if (time == 2) {
        drawCircle("yellow");
    }
    else if (time == 3) {
        drawTriangle("cyan");
        time = 0
    }
    else if (time == -1) {
        time = 0
    }
}









