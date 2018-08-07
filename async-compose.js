const async = require('async');

// Adds 5 to num
const addFive = (num, callback) => {
  callback(null, num + 5);
};

// Multiple num by 10
const timesTen = (num, callback) => {
  callback(null, num * 10);
};

const calculate = async.compose(addFive, timesTen);

calculate(5, (err, res) => {
  console.log(`async.compose - ${res}`);
});

const calculateSeq = async.seq(addFive, timesTen);

calculateSeq(5, (err, res) => {
  console.log(`async.seq - ${res}`);
});
