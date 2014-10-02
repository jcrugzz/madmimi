var madmimi = require('../');

madmimi.configure({
  email: 'nicholas@example.com',
  key: 'xxxx'
});

madmimi.get('/promotions')
.then(function (promotions) {
  console.log(promotions);
})
.error(function (err) {
  console.error(err);
});
