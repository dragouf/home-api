(function () {
    "use strict";

    module.exports = {
      index: function (req, res, next) {
        res.send("404");
        return next();
      }
    }
}())
