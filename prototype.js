//   Color Selector Controls
  
const colorInput = document.getElementById("color");
const root = document.documentElement;
  
colorInput.addEventListener("input", (e) => {
    root.style.setProperty("--boxColor", `${e.target.value}`);
});


const nSize = document.getElementById("neuSize");
const nDepth = document.getElementById("neuDepth");
const nStrength = document.getElementById("neuStrength");
const nRadius = document.getElementById("neuRadius");
const threeDepth = document.getElementById("threeDepth");
const threeStrength = document.getElementById("threeStrength");
var neuModel = document.getElementById("neuModel");
let s = 50,
    nx = 0,
    ny = 0,
    nb = .25,
    nl = .25,
    nd = .25,
    nr = 0,
    tx = 1,
    ty = 1,
    tb = 2,
    td = .01,
    tw = 0.01;

nSize.addEventListener("input", (e) => {
  s = e.target.value;
  setSize();
//   setCss();
});

nDepth.addEventListener("input", (e) => {
  nx = e.target.value;
  ny = e.target.value;
  nb = 2*(e.target.value);
  setDepth();
//   setCss();
});

nStrength.addEventListener("input", (e) => {
  nl = e.target.value;
  nd = e.target.value;
  setDepth();
//   setCss();
});

nRadius.addEventListener("input", (e) => {
  nr = e.target.value;
  setNeuRadius();
//   setCss();
});

  threeDepth.addEventListener("input", (e) => {
  tx = e.target.value;
  ty = e.target.value;
  tb = 2*(e.target.value);
//   setShadow();
  setDepth();
//   setCss();
});

threeStrength.addEventListener("input", (e) => {
  td = e.target.value;
  tw = e.target.value;
//   setShadow();
  setDepth();
//   setCss();
});

function setSize() {
  boxSize = `${s}%`;
  root.style.setProperty("--neuSize", boxSize);
}

function setDepth() {
  neuShadow = `${nx}px ${ny}px ${nb}px rgba(0,0,0,${nd}),
               -${nx}px -${ny}px ${nb}px rgba(255,255,255,${nl}),
               inset -${tx}px -${ty}px ${tb}px rgba(0,0,0,${td}),
               inset ${tx}px ${ty}px ${tb}px rgba(255,255,255,${tw})`;
  root.style.setProperty("--neuDepth", neuShadow);
}

function setNeuRadius() {
  neuRadius = `${nr}px`;
  root.style.setProperty("--neuRadius", neuRadius);
}

// //   Display Code Result

// function setCss() {
//   style = window.getComputedStyle(neuModel);
//   box = style.getPropertyValue('--neuDepth');
//   styleArr = box.split('),');
//   space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    
//   document.getElementById('source').innerHTML = "<span>box-shadow:</span> " + styleArr[0] + "),<br/>" + space + styleArr[1] + "),<br/>" + space + styleArr[2] + "),<br/>" + space + styleArr[3] + ";";
// }