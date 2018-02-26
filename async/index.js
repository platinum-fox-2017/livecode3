class RNG {
  static roll() {
    const tiers = [1, 2, 3, 4, 5];
    let num = Math.floor(Math.random() * 100) + 1;
    let result = 0;
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
    return result
}

  static gatchaRoll(times,callback){
      let best = 0
      var counter = setInterval(function(){
          if(times === 0){
            callback(best)
            clearInterval(counter)
          } else {
            let a = RNG.roll()
            // console.log(`dapet kocokan ${a}`);
            if(a > best) {
              best = a
            }
            times -= 1
          }
        },1000)
    return ''
  }

  static gatchaRollPromise(times){
      return  new Promise((resolve, reject) => {
          let best = 0
          let count = setInterval(() => {
            if (times < 0) {
              resolve(viewGachaResult(best));
              clearInterval(count);
            }  else {
              let a = RNG.roll()
              // console.log(`dapet kocokan ${a}`);
              if(a > best) {
                best = a
              }
              times -= 1
            }
          }, 1000);
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
RNG.gatchaRoll(5, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
// RNG.gatchaRoll(1, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
// RNG.gatchaRoll(0, function(result) { viewGachaResult(result) }); // output: 0

// RELEASE 1 TEST CASES
// RNG.gatchaRollPromise(5)
//   .then(function(result) { viewGachaResult(result) })
//   .catch(function(err) { viewGachaFailure() });

// akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>

RNG.gatchaRollPromise(0)
  .then(function(result) { viewGachaResult(result) })
  .catch(function(err) { viewGachaFailure() });

// akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?


// RELEASE 2 PROMISE(S)
let arr = []
for(let i = 0;i<10;i++){
  arr.push(RNG.gatchaRollPromise(5))
}

Promise.all(arr)
.then(function(data){
  data
})
.catch(function(err){
  console.log(err);
})
// code here...
