exports.options = {
  path: function (path) {
    if (path) {
      return '/promotions/' + path;
    } else {
      return '/promotions';
    }
  }
};

exports.all = function (done) {
  return this.request('get', exports.options.path, done);
};

exports.find = function (id, data, done) {
  if ('function' === typeof data) {
    done = data;
    data = null;
  }

  return this.request('get', exports.options.path(id), data, done);
};
