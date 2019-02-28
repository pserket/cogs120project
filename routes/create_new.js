const fs = require('fs');
const path = require('path');
var data = require('../data.json');
var mkdirp = require('mkdirp');

exports.view = function (req, res) {
    const author = req.params.author;
    const dance_name = req.body.dn_name;

    var dances = data['users'][author]['dances'];

    var count = 1;

    var dn = dance_name;
    while (dn in dances) {
        dn = dance_name + count.toString();
        count++;
    }

    const parent_dir = './database/' + author + '/audio/';
    const file = parent_dir + req.file.originalname;

    const ext = path.extname(req.file.originalname);

    if (!(ext === '.mp3')) {
        return res
            .status(500)
            .contentType("text/plain")
            .end("Wrong file type! (use mp3)");
    }

    var dance = {
        "author": author,
        "name": dn,
        "duration": "1:50",
        "song": file,
        "thumbnail": "https://picsum.photos/170?random",
        "cues": []
    };

    data['users'][author]['dances'][dn] = dance;

    // save

    var content = JSON.stringify(data);

    fs.writeFile('data.json', content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    mkdirp(parent_dir, function (err) {
        if (err) return console.error(err);
        else console.log('Done!');


        fs.rename(req.file.path, file, err => {
            if (err) {
                return res
                    .status(500)
                    .contentType("text/plain")
                    .end("Error");
            }
        });
    });

    res.writeHead(301, { Location: "/create/" + author + "/" + dn })
    res.end();
};