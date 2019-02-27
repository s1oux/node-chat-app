const moment = require('moment');

var date = moment();

console.log(date.format('Do-MMM-YYYY HH:mm:ss'));
date.subtract(5, 'hours').subtract(10, 'minutes');

console.log(date.format('h:mm a'));
