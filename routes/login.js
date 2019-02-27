const users = require('../users.json');

exports.view = function (req, res) {
    res.render('login');
};

exports.login = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!(users[username] === undefined)) {
        var data = require('../data.json');

        var x = data['users'][username];
        x['explore'] = data['explore'];

        res.render('index', x);
    } else {
        console.log(!(users[username] === undefined));
        console.log(users[username] === password);

        return res
            .status(500)
            .contentType("text/plain")
            .end("Wrong username or password!");
    }
};

exports.register = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const rpassword = req.body.rpassword;

    res.render('index');
};