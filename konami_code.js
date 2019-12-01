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

function init() {
  // your code here
  document.body.addEventListener('keydown',
  function(e){
    console.log(e.key);
    keyLogger.push(e.key);
    console.log(keyLogger);
    if (keyLogger.length == codes.length){
      keyLogger.shift();
    }
    if (keyLogger == codes){
      alert('All power-ups are active!')
    }
  })
}

init();
