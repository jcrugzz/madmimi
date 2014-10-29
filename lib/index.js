/**
 * Module Dependencies
 */
var request = require('request')
,   errbot  = require('errbot')
,   methods = require('methods')
,   Promise = require('bluebird')
,   MadMimi;

/**
 * Method Helpers
 */
var promotions = require('./promotions');

MadMimi = function () {
  this.configure();

  /**
   * Setup Method Helpers
   */
  this.promotions = {
    all: promotions.all.bind(this),
    find: promotions.find.bind(this)
  };
};

MadMimi.prototype.configure = function (options) {
  options = options || {};
  this.secure = options.secure || true;
  this.host   = options.host || 'api.madmimi.com';
  this.email  = options.email;
  this.key    = options.key;
};

MadMimi.prototype.request = function (method, route, data, done) {
  method = method.toUpperCase();
  if ('/' !== route[0]) route = '/' + route;

  var self     = this
  ,   protocol = (self.secure ? 'https' : 'http')
  ,   uri      = [protocol, '://', self.host, route].join('');

  var deferred = new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: method,
      qs: { username: self.email, api_key: self.key },
      form: data,
      json: true
    }, function (err, res, body) {
      if (err || res.statusCode !== 200) {
        return reject(
          errbot.initialize(res.statusCode, err || res.body)
        );
      }

      resolve(body);
    });
  });

  if (done) {
    deferred.then(function (result) {
      done(null, result);
    }, done);
  }

  return deferred;
};

methods.forEach(function (method) {
  MadMimi.prototype[method] = function (route, data, done) {
    if ('function' === typeof data) {
      done = data;
      data = null;
    }

    return this.request(method, route, data, done);
  };
});

module.exports = new MadMimi();
