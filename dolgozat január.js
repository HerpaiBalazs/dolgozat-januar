function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

  function hasUniqueChars(str){
    return str.split('').every(function(v, i, arr){
      return arr.indexOf(v) == i;
    });
  } 
  
  function divisors(integer) {
    let result = []; 
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) { 
        result.push(i); 
    } 
    } 
    return result.length ? result : `${integer} is prime`; 
  }
  