const fs = require('fs');

var data = require('../data.json');

exports.view = function (req, res) {
    const author = req.params.author;

    var dances = data['users'][author]['dances'];

    var dance_name = 'Dance ';
    var count = 1;

    while (dance_name + count.toString() in dances) {
        count++;
    }

    dance_name = dance_name + count.toString();

    var dance = {
        "author": author,
        "name": dance_name,
        "duration": "1:50",
        "thumbnail": "https://picsum.photos/170?random",
        "cues": []
    };

    data['users'][author]['dances'][dance_name] = dance;

    // save

    var content = JSON.stringify(data);

    fs.writeFile('data.json', content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    res.json({
       'name' : dance_name
    });
};