const setBgColor = (ref, callback) => {
  if (ref.current !== null) {
    const squareStyle = window.getComputedStyle(ref.current)
    const squareColor = squareStyle.getPropertyValue('background-color')
    console.log(squareStyle.getPropertyValue('background-color'));
    document.body.style.backgroundColor = squareColor
    const hex = rgbToHex(squareColor);
    callback(hex);
    console.log(hex);
  }
}

const setBgColorFn = (ref, callback) => () => {
  if (ref.current !== null) {
    const squareStyle = window.getComputedStyle(ref.current)
    const squareColor = squareStyle.getPropertyValue('background-color')
    console.log(squareStyle.getPropertyValue('background-color'));
    document.body.style.backgroundColor = squareColor
    const hex = rgbToHex(squareColor);
    callback(hex);
    console.log(hex);
  }
}

function rgbToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length === 1)
    r = "0" + r;
  if (g.length === 1)
    g = "0" + g;
  if (b.length === 1)
    b = "0" + b;

  return "#" + r + g + b;
}

export {
  setBgColor,
  setBgColorFn,
};
