const unusualSpending = () => {
  var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('success');
    }, 250);
  });
  return promise;
};

export {unusualSpending};
