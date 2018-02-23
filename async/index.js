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
    let biggest = 0

    if(times !== 0){
      for(let i = 0; i < times; i++){
        let result = RNG.roll()
        if(result > biggest){
          biggest = result
        }
      }
    }

    setTimeout(function() {
      callback(biggest)
    }, 1000);
  }

  static gatchaRollPromise(times){
    return new Promise((resolve,reject)=>{
      let biggest = 0
      if(times !== 0){
        for(let i = 0; i < times; i++){
          let result = RNG.roll()
          if(result > biggest){
            biggest = result
          }
        }
      }
  
      if(biggest > 0){
        setTimeout(function() {
          resolve(biggest)
        }, 1000);
      }else{
        setTimeout(function() {
          reject()
        }, 1000);
      }
    })
  }

  // static gatchaRollPromise2(times,repitision){
  //   for(let i = 0; i < repitision; i++){
  //     return new Promise ((resolve,reject)=>{
  //       let biggest = 0
  //       if(times !== 0){
  //         for(let j = 0; j < times; j++){
  //           let result = RNG.roll()
  //           if(result > biggest){
  //             biggest = result
  //           }
  //         }
  //       }

  //       if(biggest > 0){
  //         setTimeout(function() {
  //           resolve(biggest)
  //         }, 1000);
  //       }else{
  //         setTimeout(function() {
  //           reject('err')
  //         }, 1000);
  //       }
  //     })
  //   }
  // }
}

function viewGachaResult(best) {
  console.log(`YOUR BEST GATCHA ROLL RESULT IS ${best}`);
}

function viewGachaFailure() {
  console.log('YAKIN NGGAK MAU NGE-ROLL?');
}

// RELEASE 0 TEST CASES
RNG.gatchaRoll(5, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(1, function(result) { viewGachaResult(result) }); // output log sesuai hasil random terbaik
RNG.gatchaRoll(0, function(result) { viewGachaResult(result) }); // output: 0

// RELEASE 1 TEST CASES

RNG.gatchaRollPromise(5).then(function (result){
  viewGachaResult(result)
}).catch(function(err){viewGachaFailure()})

// akan menampilkan di log: YOUR BEST GATCHA ROLL RESULT IS <angka antara 1-5>

RNG.gatchaRollPromise(0).then(function(result) {
   viewGachaResult(result) 
}).catch(function(err) {
   viewGachaFailure() });

// akan menampilkan di log: YAKIN NGGAK MAU NGE-ROLL?


// RELEASE 2 PROMISE(S)


RNG.gatchaRollPromise(2).then((result)=>{
     viewGachaResult(result) 
     return RNG.gatchaRollPromise(result)
}).then((result2)=>{
  viewGachaResult(result2) 
  return RNG.gatchaRollPromise(result2)
}).then((result3)=>{
  viewGachaResult(result3)
  return RNG.gatchaRollPromise(result3)
}).then((result4)=>{
  viewGachaResult(result4)
  return RNG.gatchaRollPromise(result4)
}).then((result5)=>{
  viewGachaResult(result5)
  return RNG.gatchaRollPromise(result5)
}).then((result6)=>{
  viewGachaResult(result6)
  return RNG.gatchaRollPromise(result6)
}).then((result7)=>{
  viewGachaResult(result7)
  return RNG.gatchaRollPromise(result7)
}).then((result8)=>{
  viewGachaResult(result8)
  return RNG.gatchaRollPromise(result8)
}).then((result9)=>{
  viewGachaResult(result9)
  return RNG.gatchaRollPromise(result9)
}).then((result10)=>{
  viewGachaResult(result10)
  return RNG.gatchaRollPromise(result10)
}).catch((err)=>{
     viewGachaFailure()
})
