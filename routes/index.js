var data = require('../data.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  console.log(data);

  for (var i = 0; i < data['users'].length; i++) {
    var x = data['users'][i];

    x['explore'] = data['explore'];

    if (x['name'] === 'dummy') {
        res.render('index', x);
        break;
    }
  }

};