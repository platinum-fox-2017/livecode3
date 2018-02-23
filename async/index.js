class RNG {
  static roll() {
    const tiers = [1, 2, 3, 4, 5];
    let num = Math.floor(Math.random() * 100) + 1;
    let result = 'UNKNOWN';
    if (num > 60) {
      result = tiers[0];
    } else if (num > 40) {
      result = tiers[1];
    } else if (num > 20) {
      result = tiers[2];
    } else if (num > 5) {
      result = tiers[3];
    } else {
      result = tiers[4];
    }

    return result;
  }

  static gatchaRoll(times, callback) {

    let hasil = 0
    if (times <= 0) {
      hasil = 0
    }
    for (let index = 0; index < times; index++) {
      hasil = RNG.roll()
    }
    setTimeout(function () {
      viewGachaResult(hasil)
    }, 1000)
  }

  static gatchaRollPromise(times) {
    let hasil = 0
    return new Promise((resolve, reject) => {
      for (let index = 0; index < times; index++) {
        hasil = RNG.roll()
      }
      if (hasil > 0) {
        resolve(hasil)
      } else {
        reject(hasil)
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
// console.log(RNG.gatchaRoll(5))
RNG.gatchaRoll(5, function (result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(1, function (result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(0, function (result) { viewGachaResult(result) }); // output: 0

// // RELEASE 1 TEST CASES
RNG.gatchaRollPromise(5)
  .then(function (result) { viewGachaResult(result) })
  .catch(function (err) { viewGachaFailure() });

// // akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>

// RNG.gatchaRollPromise(0)
//   .then(function (result) { viewGachaResult(result) })
//   .catch(function (err) { viewGachaFailure() };

// akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?


// RELEASE 2 PROMISE(S)

// code here...