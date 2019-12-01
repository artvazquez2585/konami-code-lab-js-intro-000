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
var keyLogger=[];

function onKeyDownHandler(e){
  const key = e.key;
  console.log(`This is index before if: ${index}`)
  console.log(`This is eKey: ${e.key}`)
  console.log(`This is key: ${key}`)
  keyLogger.push(e.key);
  console.log(keyLogger)
  if (key === codes[index]) {
    index++;
    console.log(`This is index after addition: ${index}`)
    if (index === codes.length) {
      alert("Hurray!");
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
