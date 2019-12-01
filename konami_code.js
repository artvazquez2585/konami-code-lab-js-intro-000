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
  console.log(`This is eKey: ${e.key}`)
  console.log(`This is key: ${key}`)
  console.log(`This is index: ${index}`)
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Hurray!");
      index = 0;
    }
  }
  else
  {
    index = 0;
  }
}

function init() {
  // your code here
  document.body.addEventListener('keydown',onKeyDownHandler)
}

init();
