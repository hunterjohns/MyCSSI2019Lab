
var isl = [1,3,2,4,1,3,1,4,5,2,2,1,4,2,2];

let start;
let end;

for (let i = 0; i < isl.length; i++) {
  let start = isl[0];
  if(start > isl[i+1]){
    start = i;
  } else {
    end = i;
  }
}
console.log(start + " " + end);
