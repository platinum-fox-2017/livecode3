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
    let arr = []
    for (var i = 0; i < times; i++) {
      // console.log(RNG.roll())
      arr.push(RNG.roll())
      arr.sort(function(a, b) {return b - a})
    }
    callback(arr[0] || 0)
    // console.log(arr[0] || 0);
  }

  static gatchaRollPromise(times) {
    return new Promise(function (resolve, reject) {
      let arr = []
      for (var i = 0; i < times; i++) {
        arr.push(RNG.roll())
        arr.sort(function(a, b) {return b - a})
      }
      resolve(arr[0] || 0)
    })
  }
}

function viewGachaResult(best) {
  setTimeout(function () {
    console.log(`YOUR BEST GATCHA ROLL RESULT IS ${best}`);
  }, 1000)
}

function viewGachaFailure() {
  console.log('YAKIN NGGAK MAU NGE-ROLL?');
}

// RELEASE 0 TEST CASES
RNG.gatchaRoll(5, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(1, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(0, function(result) { viewGachaResult(result) }); // output: 0

// RELEASE 1 TEST CASES
RNG.gatchaRollPromise(5)
  .then(function(result) { viewGachaResult(result) })
  .catch(function(err) { viewGachaFailure() });

// akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>

RNG.gatchaRollPromise(0)
  .then(function(result) { viewGachaResult(result) })
  .catch(function(err) { viewGachaFailure() });

// akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?
//
//
// RELEASE 2 PROMISE(S)
//
RNG.gatchaRollPromise(5).then(function (result) {
  RNG.gatchaRollPromise(result).then(function (result1) {
    RNG.gatchaRollPromise(result1).then(function (result2) {
      RNG.gatchaRollPromise(result2).then(function (result3) {
        RNG.gatchaRollPromise(result3).then(function (result4) {
          RNG.gatchaRollPromise(result4).then(function (result5) {
            RNG.gatchaRollPromise(result5).then(function (result6) {
              RNG.gatchaRollPromise(result6).then(function (result7) {
                RNG.gatchaRollPromise(result7).then(function (result8) {
                  RNG.gatchaRollPromise(result8).then(function (result9) {
                    RNG.gatchaRollPromise(10).then(function (result11) {
                      console.log(result,result1,result2,result3,result4,result5,result6,result7,result8,result9);
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
