exports.view = function(req, res){
    const author = req.params.author;
    const name = req.params.name;

    res.render('create', {
        "author": author,
        "name": name
    });
};