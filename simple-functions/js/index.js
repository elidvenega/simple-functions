const array = [2,4,6,8,10];

const double = [];

const mapArray = array.map((num) => {
  return num * 2
});

console.log('map',mapArray);

const addition = (a) => (b) =>  a+b;

console.log(addition(1)(2));

const multiply = (x,y) => x * y;

console.log(multiply(2,9));