var madmimi = require('../');

madmimi.configure({
  email: 'nicholas@example.com',
  key: 'xxxx'
});

madmimi.get('/promotions')
.then(function (promotions) {
  console.log(promotions);
})
.catch(function (err) {
  console.error(err);
});
