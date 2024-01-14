let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];
let count = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 70) {
    count++;
  }
  else{
    console.log('hi subharao');
  }
}
console.log("Number of students who passed: " + count);


// ------------------
//   const a=[1,2,2,3,4,4,5];
//   console.log([...new Set(a)]);
//--------------------
  const a=[1,2,3,4,5];
  let sum=0;
  for(let i=1;i<=a.length;i++){
    if(i%2==1){
      console.log(i);
      sum++
    }
  }
console.log(sum);



