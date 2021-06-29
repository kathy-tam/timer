//User input as arguments
//Arguments are strings
let times = process.argv.slice(2);

//Edge cases
if(!times.length) { return }  //no args
times = times.map(time => Number(time)).filter(time => time >= 0 && typeof time === 'number'); //not a number or -number 
times.sort((a,b) => a - b);

for(const time of times) {
  //beep: '\x07' not working
  setTimeout(() => process.stdout.write('.'), time*1000);
}