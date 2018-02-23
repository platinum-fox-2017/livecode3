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

  static gatchaRoll(times, callback) {
    setTimeout(function () {
      if(times === 0) {
        callback(0)
      } else {
        for (let i = 0; i < times; i++) {
          callback(RNG.roll());
        }
      }
    }, 1000);
  }

  static gatchaRollPromise(times) {
    return new Promise ( (resolve, reject) => {
      if (times === 0) {
        reject(err)
      } else {
      let arr = new Array()
      for (let i = 0; i < times; i++) {
        arr.push(RNG.roll());
      }
      resolve(arr.join(','))
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

// RELEASE 1 TEST CASES
// RNG.gatchaRollPromise(5)
//   .then(function(result) { viewGachaResult(result) })
//   .catch(function(err) { viewGachaFailure() });

// akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>

// RNG.gatchaRollPromise(0)
//   .then(function(result) { viewGachaResult(result) })
//   .catch(function(err) { viewGachaFailure() })

// akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?


// RELEASE 2 PROMISE(S)

// code here...
Promise.all([RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1), RNG.gatchaRollPromise(1)])
.then(data => {
  for (let i = 0; i < data.length; i++) {
    viewGachaResult(data[i])
  }
})