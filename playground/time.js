var moment = require('moment');

var someTimeStamp = moment().valueOf();

console.log(someTimeStamp);

var createdAt = 1234;

var date = moment(createdAt);

// date.add(1, 'year');
//
// console.log(date.format('Do MMM, YYYY'));

console.log(date.format('h:mm a'));
