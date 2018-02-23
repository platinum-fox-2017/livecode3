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
    if(times == 0){
      callback(0);
    }else{
      let result = [];
      for(let i=0; i<times; i++){
        result.push(RNG.roll());
      }
      result.sort(function(a, b){return b-a})
      callback(result[0]);
    }
  }

  static gatchaRollPromise(times){
    return new Promise((resolve, reject)=>{
      if(times == 0){
        reject(0);
      }else{
        let result = [];
        for(let i=0; i<times; i++){
          result.push(RNG.roll());
        }
        result.sort(function(a, b){return b-a})
        resolve(result[0]);
      }
    })
  }
}

function viewGachaResult(best) {
  setTimeout(function(){
    console.log(`YOUR BEST GATCHA ROLL RESULT IS ${best}`);
  },1000);
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


// RELEASE 2 PROMISE(S)

RNG.gatchaRollPromise(10)
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(9)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(8)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(7)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(6)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(5)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(4)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(3)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(2)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(1)
  })
  .then(function(result) { 
    viewGachaResult(result)
    return RNG.gatchaRollPromise(0)
  })
  .catch(function(err) { viewGachaFailure() });