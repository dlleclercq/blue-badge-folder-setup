module.exports = function(req, res, next) {
    res.header('access-control-origin', '*');
    res.header('access-contorl-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
}