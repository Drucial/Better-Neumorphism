// Mobile viewport Height Correction
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Info Toggle
const icon = document.querySelector(".icon")
const info = document.querySelector(".info-container")

function toggleInfo() {
    if(info.classList.contains('show')){
        info.classList.remove('show');
        icon.innerText = "i"
    } else {
        info.classList.add('show');
        icon.innerText = "X"
    }
}
icon.addEventListener("click", toggleInfo)

// Global Variables
const root = document.documentElement;
const neuDir = document.getElementById('neu-direction');
const neuDepth = document.getElementById('neu-depth');
const neuStrength = document.getElementById('neu-strength')
const neuEdges = document.getElementById('neu-edges');
const neuRadius = document.getElementById('neu-radius');

// Color Input
const hslInput = document.querySelectorAll('.hsl-input')
const hue = document.getElementById('hue')
const sat = document.getElementById('saturation')
const lum = document.getElementById('luminance')
// Validation

function hueVal(){
    if(hue.value === ''){
        return 
    } else if(parseInt(hue.value) > 360 || parseInt(hue.value) < 0 ){
        alert('Please enter a hue value between 0 and 360')
        hue.value = ""
        return
    } else {
        return true
    }
}
function satVal(){
    if(sat.value === ''){
        return 
    } else if(parseInt(sat.value) > 100 || parseInt(sat.value) < 0 ){
        alert('Please enter a saturation value between 0 and 100')
        sat.value = ""
        return 
    } else {
        return true
    }
}
function lumVal(){
    if(lum.value === ''){
        return 
    } else if(parseInt(lum.value) > 100 || parseInt(lum.value) < 0 ){
        alert('Please enter a luminance value between 20 and 90')
        lum.value = ""
        return
    } else {
        return true
    }
}
for(let i =0; i < hslInput.length; i++){
    hslInput[i].addEventListener("input", () => {
        hueVal();
        satVal();
        lumVal();
        if(hueVal() === true && satVal() === true && lumVal() === true){
            colorUpdate()
        } else {
            return
        }
    })
}

function colorUpdate() {
    const h = hue.value;
    const s = sat.value;
    const l = lum.value;
    document.documentElement.style.setProperty('--box-h', `${h}`);
    document.documentElement.style.setProperty('--box-s', `${s}%`);
    document.documentElement.style.setProperty('--box-l', `${l}%`);
    setDepth();
    setStrength();
    setEdges();
    setCss();
}

// Depth Slider
function setDepth() {
    neuDistance = neuDepth.value;
    neuNeg = 1 - neuDistance
    rampCalc = neuDistance * 2.5
    root.style.setProperty("--neu-distance", `${neuDistance}px`);
    root.style.setProperty("--neu-neg-dist", `${neuNeg}px`);
    root.style.setProperty("--neu-ramp", `${rampCalc}px`);
    setStrength()
    setDirection()
}
neuDepth.addEventListener("input", () => {
    setDepth();
    setCss()
});

// Strength Slider
function setStrength() {
    const multiplier = neuStrength.value;
    const staticLum = getComputedStyle(root).getPropertyValue('--box-l').split("%")[0]
    const lightCalc = (staticLum * multiplier)
    const darkCalc = (staticLum * (1 - (multiplier - 1)))
    root.style.setProperty("--hl-strength", `${lightCalc}%`);
    root.style.setProperty("--shd-strength", `${darkCalc}%`);
}
neuStrength.addEventListener("input", () => {
    setStrength();
    setCss()
});

// Edges Slider
function setEdges() {
    edgeDistance = neuEdges.value;
    edgeNeg = -1 * edgeDistance
    rampCalc = edgeDistance * 4
    root.style.setProperty("--edge-dist", `${edgeDistance}px`);
    root.style.setProperty("--edge-neg-dist", `${edgeNeg}px`);
    root.style.setProperty("--edge-ramp", `${rampCalc}px`);
}
neuEdges.addEventListener("input", () => {
    setEdges();
    setCss()
});

// Radius Slider
// neuRadius.addEventListener("input", (e) => {
//     radius = e.target.value
//     root.style.setProperty("--neu-radius", `${radius}rem`);
// });

// Code Output
function setCss() {
    const neuContainer = document.querySelector('.slider-container')
    const codeLine = document.querySelectorAll('.code-line')
    styleOuter = window.getComputedStyle(neuContainer).getPropertyValue('--neu-outer');
    styleArrOne = styleOuter.split("), ")
    styleInner= window.getComputedStyle(neuContainer).getPropertyValue('--neu-edges');
    styleArrTwo = styleInner.split("), ")

    lineOne = `${styleArrOne[0]}),`
    lineTwo = `${styleArrOne[1]},`
    lineThree = `${styleArrTwo[0]}),`
    lineFour = `${styleArrTwo[1]};`

    for(let i = 0; i < codeLine.length; i++){
        codeLine[0].innerText = lineOne
        codeLine[1].innerText = lineTwo
        codeLine[2].innerText = lineThree
        codeLine[3].innerText = lineFour
    }
}

// Random Colors on Load
function colorRandomizer(){
    hStartup = Math.round(Math.random() * (360 - 0) + 0);
    sStartup = Math.round(Math.random() * (30 - 0) + 0);
    lStartup = Math.round(Math.random() * (80 - 60) + 60);
    root.style.setProperty("--box-h", `${hStartup}`);
    root.style.setProperty("--box-s", `${sStartup}%`);
    root.style.setProperty("--box-l", `${lStartup}%`)
    setDepth();
    setStrength();
    setEdges();
    setCss();
}
colorRandomizer()

//   Source Code Copy & Tool Tips 
const toolTip = document.getElementById("toolTip");
function alertCopy () {
    toolTip.style.setProperty("opacity", .85);
}
function copyToClipboard() {
    const source = document.getElementById('source').innerText;
    const text = source.split(/\r?\n|\r/g).join(' ')
    navigator.clipboard.writeText(text);
    toolTip.innerHTML = "Copied!";
}
function resetCopy() {
    toolTip.style.setProperty("opacity", 0);
    toolTip.innerHTML = "Click to Copy";
}
toolTip.addEventListener("mouseover", alertCopy)
toolTip.addEventListener("click", copyToClipboard)
toolTip.addEventListener("mouseout", resetCopy)

// test direction slider
function setDirection() {
    const neuDirection = parseFloat(neuDir.value);
    const gradientDirection = -32
    const gradDirOffset = - (gradientDirection * neuDirection);
    const x = parseFloat(getComputedStyle(root).getPropertyValue('--neu-distance').split('px')[0])
    const dirOffsetX = - (x * neuDirection)
    const dirNegOffsetX = (x * neuDirection)
    root.style.setProperty("--neu-x", `${dirOffsetX}px`);
    root.style.setProperty("--neu-neg-x", `${dirNegOffsetX}px`);
    root.style.setProperty("--direction", `${gradDirOffset}deg`);
    setStrength()
}
neuDir.addEventListener("input", () => {
    setDirection();
    setCss()
});