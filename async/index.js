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

  static gatchaRoll(times,callback){
    if(times===0){
      viewGachaResult(times)
    }else{
      var simpanarr=[]
      for (var i = 0; i < times; i++) {
        simpanarr.push(RNG.roll())
      }
      var max=0
      for(let j=0;j<simpanarr.length;j++){
        if(simpanarr[j]>max){
          max=simpanarr[j]
        }
      }
      callback(max)

    }

  }

  static gatchaRollPromise(times){
    return new Promise(function(resolve,reject){
      if(times===0){
        reject('YAKIN NGGAK MAU NGE-ROLL?')
      }else{
        var simpanarr=[]
        for (var i = 0; i < times; i++) {
          simpanarr.push(RNG.roll())
        }
        var max=0
        for(let j=0;j<simpanarr.length;j++){
          if(simpanarr[j]>max){
            max=simpanarr[j]
          }
        }
        resolve(max)
      }

    });

  }
}

function viewGachaResult(best) {
  console.log(`YOUR BEST GATCHA ROLL RESULT IS ${best}`);
}

function viewGachaFailure() {
  console.log('YAKIN NGGAK MAU NGE-ROLL?');
}
// console.log(RNG.roll());
// RELEASE 0 TEST CASES
RNG.gatchaRoll(5, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(1, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(0, function(result) { viewGachaResult(result) }); // output: 0

// RELEASE 1 TEST CASES
RNG.gatchaRollPromise(5)
  .then(function(result) { viewGachaResult(result) })
  .catch(function(err) { viewGachaFailure() });
//
// // akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>
//
RNG.gatchaRollPromise(0)
  .then(function(result) { viewGachaResult(result) })
  .catch(function(err) { viewGachaFailure() });

// akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?


// RELEASE 2 PROMISE(S)
RNG.gatchaRollPromise(5)
  .then(function(result) { return result })
  .then(function(result) { return result })
  .then(function(result1) { console.log(result1);})
  .catch(function(err){return err;})
