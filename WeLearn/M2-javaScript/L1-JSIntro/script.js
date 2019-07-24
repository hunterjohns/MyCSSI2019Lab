console.log("Script Running");

let name = 'Charlie';
console.log('Hello ' + name + '!');
let age = 15;
console.log('You are ' + age + ' years old!');

if(age >= 16) {
  console.log('I can drive!');
}
else {
  console.log('oof');
}


let hey = '.caption';

const functionName = (para) => {
  document.querySelector(para).style.color = 'red';
}

functionName(hey);
