const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function onKeyDownHandler(e){
  const key = e.key;
  if (key === codes[index]) {
    index++;
    console.log(`This is index after addition: ${index}`)
    if (index === codes.length) {
      alert("All power-ups enabled for Gradius!");
      index = 0;
    }
  }
  else
  {
    index = 0;
    console.log(`This is index after failure: ${index}`)
  }
}

function init() {
  // your code here
  document.body.addEventListener('keydown',onKeyDownHandler)
}

init();
