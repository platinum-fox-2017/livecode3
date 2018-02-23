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

  static gatchaRoll(times,cb) {
    let arr = []
    for(let i = 0; i < times; i++) {
      arr.push(this.roll())
    }
    arr.sort()
    let result = 0
    arr.forEach(num => {
      if(num === 0) {
        result = num
      } else {
        result = num
      }
    })
    cb(result)
  }

  static gatchaRollPromise(times) {
    return new Promise ((res,rej) => {
      if(times > 0) {
        let arr = []
        for(let i = 0; i < times; i++) {
          arr.push(this.roll())
        }
        arr.sort()
        arr.forEach(num => {
          let result = 0
          if(num !== 0) {
            result = num
            res(result)
          }
        })
      } else {
        rej(times)
      }
    })
  }
}

function viewGachaResult(best) {
  setTimeout(function() {
    // jalankan sesuatu disini setelah 1 detik
    console.log(`YOUR BEST GATCHA ROLL RESULT IS ${best}`)
  }, 1000);
}

function viewGachaFailure() {
  setTimeout(function() {
    // jalankan sesuatu disini setelah 1 detik
    console.log('YAKIN NGGAK MAU NGE-ROLL?')
  }, 1000);
}

// RELEASE 0 TEST CASES
// RNG.gatchaRoll(5, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
// RNG.gatchaRoll(1, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
// RNG.gatchaRoll(0, function(result) { viewGachaResult(result) }); // output: 0
//
// // RELEASE 1 TEST CASES
// RNG.gatchaRollPromise(5)
//   .then(function(result) { viewGachaResult(result) })
//   .catch(function(err) { viewGachaFailure() });
//
// // akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>
//
// RNG.gatchaRollPromise(0)
//   .then(function(result) { viewGachaResult(result) })
//   .catch(function(err) { viewGachaFailure() });

// akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?


// RELEASE 2 PROMISE(S)

// code here...

promise1 = RNG.gatchaRollPromise(5)
promise2 = RNG.gatchaRollPromise(1)
promise3 = RNG.gatchaRollPromise(2)
promise4 = RNG.gatchaRollPromise(3)
promise5 = RNG.gatchaRollPromise(4)
promise6 = RNG.gatchaRollPromise(2)
promise7 = RNG.gatchaRollPromise(2)
promise8 = RNG.gatchaRollPromise(3)
promise9 = RNG.gatchaRollPromise(2)
promise10 = RNG.gatchaRollPromise(3)

let arrOfPromise = [promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8,promise9,promise10]

Promise.all(arrOfPromise).then(promises => {
  viewGachaResult(typeof promises)
})
