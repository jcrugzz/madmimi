var madmimi = require('../');

madmimi.configure({
  email: 'nicholas@example.com',
  key: 'xxxx'
});

/**
 * Get all promotions.
 */
madmimi.get('/promotions')
.then(function (promotions) {
  console.log(promotions);
})
.error(function (err) {
  console.error(err);
});

/**
 * Get a specific promotion.
 */
madmimi.get('/promotions/:id', {
  params: {
    id: '111'
  }
})
.then(function (promotions) {
  console.log(promotions);
})
.error(function (err) {
  console.error(err);
});

/**
 * If you prefer, there's a callback API as well.
 */
madmimi.get('/promotions', function (err, result) {

});
