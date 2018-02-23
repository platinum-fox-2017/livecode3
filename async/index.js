class RNG {
  static roll() {
    const tiers = [1, 2, 3, 4, 5];
    let num = Math.floor(Math.random() * 100) + 1;
    let result = 'UNKNOWN';
    if(num > 60) {
      result = tiers[0];
    } else if(num > 40) {
      result = tiers[1];
    } else if(num > 20) {
      result = tiers[2];
    } else if(num > 5) {
      result = tiers[3];
    } else {
      result = tiers[4];
    }

    return result;
  }
  static gatchaRoll(times, callback){
    let arr =[];
    for(let i=0; i<times; i++){
      let result = RNG.roll();
      arr.push(result);
    }
    let highest = Math.max(...arr);
    if(highest === -Infinity)highest =0;
    setTimeout(function() {
      // jalankan sesuatu disini setelah 1 detik
      callback(highest);
    }, 1000);
  }
  static gatchaRollPromise(times){
    return new Promise ((resolve,reject)=>{
          let arr=[];
    for(let i=0; i<times; i++){
      let result = RNG.roll();
      arr.push(result);
    }
    let highest = Math.max(...arr);
    if(highest === -Infinity){
      highest = 0;
      setTimeout(function() {

        reject(highest);
      }, 1000);
    } else {
      setTimeout(function() {
        resolve(highest);
      }, 1000);
    }
    })
  }
}

function viewGachaResult(best) {
  console.log(`YOUR BEST GATCHA ROLL RESULT IS ${best}`);
}

function viewGachaFailure() {
  console.log('YAKIN NGGAK MAU NGE-ROLL?');
}

// RELEASE 0 TEST CASES
// RNG.gatchaRoll(5, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
// RNG.gatchaRoll(1, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
// RNG.gatchaRoll(0, function(result) { viewGachaResult(result) }); // output: 0

// // RELEASE 1 TEST CASES
// RNG.gatchaRollPromise(5)
//   .then(function(result) { viewGachaResult(result) })
//   .catch(function(err) { viewGachaFailure() });

// // akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>

// RNG.gatchaRollPromise(0)
//   .then(function(result) { viewGachaResult(result) })
//   .catch(function(err) { viewGachaFailure() });

// // akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?


// // RELEASE 2 PROMISE(S)

// // code here...
let promise1 = RNG.gatchaRollPromise(5);
let promise2 = RNG.gatchaRollPromise(5);
let promise3 = RNG.gatchaRollPromise(5);
let promise4 = RNG.gatchaRollPromise(5);
let promise5 = RNG.gatchaRollPromise(5);
let promise6 = RNG.gatchaRollPromise(5);
let promise7 = RNG.gatchaRollPromise(5);
let promise8 = RNG.gatchaRollPromise(5);
let promise9 = RNG.gatchaRollPromise(5);
let promise10 = RNG.gatchaRollPromise(5);

Promise.all([
  promise1, 
  promise2, 
  promise3,
  promise4,
  promise5,
  promise6,
  promise7,
  promise8,
  promise9,
  promise10,
]).then(function(values) {
  for(let i=0; i<values.length; i++){
    if(values[i]===0){
      viewGachaFailure();
    } else {
      viewGachaResult(values[i]);
    }
  }
})