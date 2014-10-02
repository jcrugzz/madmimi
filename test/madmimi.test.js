var madmimi = require('../')
,   expect  = require('chai').expect;

describe('MadMimi Configuration', function () {
  it('should use sensible defaults', function () {
    expect(madmimi.secure).to.equal(true);
    expect(madmimi.host).to.equal('api.madmimi.com');
  });

  it('should store configuration when #configure is called', function () {
    madmimi.configure({
      email: 'nicholas@example.com',
      key: 'xxxx'
    });

    expect(madmimi.email).to.equal('nicholas@example.com');
    expect(madmimi.key).to.equal('xxxx');
  });
});
