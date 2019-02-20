var data = require('../data.json');

exports.view = function (req, res) {
    const author = req.params.author;

    var dances = data['users'][author]['dances'];

    function in_dances(name) {
        for (var i = 0; i < dances.length; i++) {
            var dance = dances[i];

            if (dance['name'] === name) {
                return true;
            }
        }
        return false;
    }

    var dance_name = 'Dance ';
    var count = 1;

    while (in_dances(dance_name + count.toString())) {
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

    data['users'][author]['dances'].push(dance);

    // save

    res.json({
       'name' : dance_name
    });
};