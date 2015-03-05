var madmimiConstructor = require('../')
,   madmimiInstance = new madmimiConstructor()
,   expect  = require('chai').expect;

describe('MadMimi Configuration', function () {
  it('should use sensible defaults', function () {
    expect(madmimiInstance.secure).to.equal(true);
    expect(madmimiInstance.host).to.equal('api.madmimi.com');
  });

  it('should store configuration when #configure is called', function () {
    madmimiInstance.configure({
      email: 'nicholas@example.com',
      key: 'xxxx'
    });

    expect(madmimiInstance.email).to.equal('nicholas@example.com');
    expect(madmimiInstance.key).to.equal('xxxx');
  });
});
