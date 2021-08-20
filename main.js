canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
canvas.addEventListener("touchstart", touch1)
canvas.addEventListener("touchmove", touch2)

function touch1(e) {
    touchy = e.touches[0].clientY - canvas.offsetTop
    touchx = e.touches[0].clientX - canvas.offsetLeft
}

function touch2(e) {
    yy = e.touches[0].clientY - canvas.offsetTop
    xx = e.touches[0].clientX - canvas.offsetLeft
    ctx.beginPath();
    ctx.linewidth = 2;
    ctx.strokeStyle = color;
    ctx.moveTo(touchx, touchy)
    ctx.lineTo(xx, yy)
    ctx.stroke()
    touchy = yy
    touchx = xx
}
if (screen.width < 992) {
    document.getElementById("myCanvas").width = screen.width - 70
    document.getElementById("myCanvas").height = screen.height - 300
    document.body.style.overflow = "hidden"
    console.log(screen.width);
}

// old code
var mousevent = ""
canvas.addEventListener("mousedown", md)
canvas.addEventListener("mouseup", mp)
canvas.addEventListener("mousemove", mm)
canvas.addEventListener("mouseleave", ml)
var color = "black"
var laspositionx, laspositiony
function md(et) {
    mousevent = "MD"
}
function mp(et) {
    mousevent = "MP"
}
function mm(et) {
    x = et.clientX - canvas.offsetLeft
    y = et.clientY - canvas.offsetTop
    if (mousevent == "MD") {
        ctx.beginPath();
        ctx.linewidth = 2;
        ctx.strokeStyle = color;
        ctx.moveTo(laspositionx, laspositiony)
        ctx.lineTo(x, y)
        ctx.stroke()
    }
    laspositionx = x
    laspositiony = y
}
function ml(et) {
    mousevent = "ML"
}
// end of old code