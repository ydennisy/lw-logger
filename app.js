module.exports = function(req, res, next){
    var start = +new Date();
    var stream = process.stdOut;
    var url = req.url;
    var method = req.method;

    response.on('finish', function(){
      var duration = +new Date - start;
      var message = method + ' to ' + url +
                    '\n took ' + duration + ' ms \n\n';
    });
    next();
};
