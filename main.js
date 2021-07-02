//   Color Selector Controls
  
  var colorInput = document.getElementById("color");
  
  colorInput.addEventListener("input", colorChange);
  
  function colorChange(e) {
    boxColor = `${e.target.value}`;
    root.style.setProperty("--boxColor", boxColor);
  }
  
//   Box Shadow Slider Controls
  
  const xOffset = document.getElementById("xOffset");
  const yOffset = document.getElementById("yOffset");
  const blur = document.getElementById("blur");
  const opcaity = document.getElementById("opacity");
  const sliderAll = document.getElementById("radius");
  const root = document.documentElement;
  let x = 0,
    y = 0,
    b = 20,
    o = .25;
  let tl = 5,
    tr = 5,
    br = 5,
    bl = 5;
  
                            
  xOffset.addEventListener("input", (e) => {
    x = e.target.value;
    setShadow();
  });
  
  yOffset.addEventListener("input", (e) => {
    y = e.target.value;
    setShadow();
  });
  
  blur.addEventListener("input", (e) => {
    b = e.target.value;
    setShadow();
  });
  
  opacity.addEventListener("input", (e) => {
    o = e.target.value;
    setShadow();
  });
  
  sliderAll.addEventListener("input", (e) => {
    tl = e.target.value;
    tr = e.target.value;
    br = e.target.value;
    bl = e.target.value;
    setRadius();
  });
  
  function setShadow() {
    boxShadow = `${x}px ${y}px ${b}px rgba(0,0,0,${o})`;
    root.style.setProperty("--boxShadow", boxShadow);
  }

  function setRadius() {
    radius = `${tl}px ${tr}px ${br}px ${bl}px`;
    root.style.setProperty("--radius", radius);
  }
  
//  Neumorphism Slider Controls
  
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
    setCss();
  });
  
  nDepth.addEventListener("input", (e) => {
    nx = e.target.value;
    ny = e.target.value;
    nb = 2*(e.target.value);
    setDepth();
    setCss();
  });
  
  nStrength.addEventListener("input", (e) => {
    nl = e.target.value;
    nd = e.target.value;
    setDepth();
    setCss();
  });
  
  nRadius.addEventListener("input", (e) => {
    nr = e.target.value;
    setNeuRadius();
    setCss();
  });
  
    threeDepth.addEventListener("input", (e) => {
    tx = e.target.value;
    ty = e.target.value;
    tb = 2*(e.target.value);
    setShadow();
    setDepth();
    setCss();
  });
  
  threeStrength.addEventListener("input", (e) => {
    td = e.target.value;
    tw = e.target.value;
    setShadow();
    setDepth();
    setCss();
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
  
//   Display Code Result
  
  function setCss() {
    style = window.getComputedStyle(neuModel);
    box = style.getPropertyValue('--neuDepth');
    styleArr = box.split('),');
    space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      
    document.getElementById('source').innerHTML = "<span>box-shadow:</span> " + styleArr[0] + "),<br/>" + space + styleArr[1] + "),<br/>" + space + styleArr[2] + "),<br/>" + space + styleArr[3] + ";";
  }
  
//   Source Code Copy & Tool Tips
  
  document.getElementById("toolTip").addEventListener("mouseover", alertCopy)
  document.getElementById("toolTip").addEventListener("click", copyToClipboard)
  document.getElementById("toolTip").addEventListener("mouseout", resetCopy)
  
  function alertCopy () {
    var tooltip = document.getElementById("toolTip");
    tooltip.style.setProperty("opacity", .85);
  }
  
  function copyToClipboard() {
    var tooltip = document.getElementById("toolTip");
    var range = document.createRange();
    range.selectNode(document.getElementById("source"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    tooltip.innerHTML = "Copied!";
  }
  
  function resetCopy() {
     tooltip = document.getElementById("toolTip");
     tooltip.style.setProperty("opacity", 0);
     tooltip.innerHTML = "Click to Copy";
  }
