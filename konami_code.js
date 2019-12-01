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

var keyLogger=[];

function init() {
  // your code here
  debugger
  document.body.addEventListener('keydown',
  function(e){
    keyLogger.push(e.key);
    if (keyLogger.length > codes.length){
      keyLogger.shift();
    }
    if (keyLogger == codes){
      alert('All power-ups are active!')
    }
  })
}

init();
