var madmimiConstructor = require('../');

/**
* Add a new audience member, and subscribe them to a list. Only callback API available.
*/
var madmimiInstance = new madmimiConstructor();

madmimiInstance.configure({
  email: 'nicholas@example.com',
  key: 'xxxx'
});

madmimiInstance.get('/audience_lists/:list/add', {
  email: 'test@example.com',
  params: { list: 'Your List' }
}, function (err, result) {
  if (err) return console.error(err);
  console.log('Success! ' + result);
});

/**
* In the meanwhile, I want to add a new audience member, and subscribe them to a list,
* for a different user. I don't have to worry about whether the above GET request was
* already sent.
*/

var madmimiInstance2 = new madmimiConstructor();

madmimiInstance2.configure({
  email: 'don@example.com',
  key: 'yyyy'
});

madmimiInstance2.get('/audience_lists/:list/add', {
  email: 'test2@example.com',
  params: { list: 'Your List' }
}, function (err, result) {
  if (err) return console.error(err);
  console.log('Success! ' + result);
});