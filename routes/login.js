const users = require('../users.json');
const fs = require("fs");

exports.view = function (req, res) {
    res.render('login');
};

exports.login = function (req, res) {
    const username = req.query.username;
    const password = req.query.password;

    if (typeof users[username] !== "undefined" && users[username] === password) {
        var data = require('../data.json');

        var x = data['users'][username];
        x['explore'] = data['explore'];

        res.render('index', x);
    } else {
        console.log(typeof users[username]);
        console.log(users[username] === password);

        return res
            .status(500)
            .contentType("text/plain")
            .end("Wrong username or password!");
    }
};

exports.register = function (req, res) {
    const username = req.query.username;
    const password = req.query.password;
    const rpassword = req.query.rpassword;

    if (typeof users[username] === "undefined") {
        if (password === rpassword) {
            users[username] = password;

            var content = JSON.stringify(users);

            fs.writeFile('users.json', content, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("Account created!");
            });

            var data = require('../data.json');

            data['users'][username] = {
                "name": username,
                "dances": {}
            };

            var content2 = JSON.stringify(data);

            fs.writeFile('data.json', content2, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("Account created part 2!");
            });

        } else {
            return res
                .status(500)
                .contentType("text/plain")
                .end("Passwords don't match!");
        }
    } else {
        return res
            .status(500)
            .contentType("text/plain")
            .end("Username exists!");
    }

    res.render('login');
};