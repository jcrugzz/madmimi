var madmimi = require('../');

madmimi.configure({
  email: 'nicholas@example.com',
  key: 'xxxx'
});

/**
* Add a new audience member, and subscribe them to a list.
*/
madmimi.post('/audience_lists/:list', {
  email: 'test@example.com'
  params: { list: 'Your List' }
})
.then(function (result) {
  console.log('Success! ' + result);
})
.error(function (err) {
  console.error(err);
});

/**
* If you prefer, there's a callback API as well.
*/
madmimi.get('/audience_lists/:list', {
  email: 'test@example.com'
  params: { list: 'Your List' }
}, function (err, result) {
  if (err) return console.error(err);
  console.log('Success! ' + result);
});

/**
 * You can also add additional metadata to the user, if you wish.
 */
 madmimi.post('/audience_lists/:list', {
   email: 'test@example.com',
   type: 'donor'
   params: { list: 'Your List' }
 })
 .then(function (result) {
   console.log('Success! ' + result);
 })
 .error(function (err) {
   console.error(err);
 });
