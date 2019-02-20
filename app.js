/**
 * Module dependencies.
 */
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require("fs");
const handlebars = require('express3-handlebars');
const index = require('./routes/index');
const login = require('./routes/login');
const dance = require('./routes/dance');
const create = require('./routes/create');
const create_new = require('./routes/create_new');
// Example route
// var user = require('./routes/user');

const app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

// Example route
app.get('/', login.view);
app.get('/index', index.view);
app.get('/dance/:author/:name', dance.view);
app.get('/create/:author/:name', create.view);
app.get('/create_new/:author', create_new.view);

const multer = require("multer");

const handleError = (err, res) => {
    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};

const upload = multer({
    dest: "./uploads/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

function saveCue(author, name, cue_name, file_name, type) {
    var data = require('./data.json');

    var cue = {
        "name": cue_name,
        "start": 10,
        "end": 15,
        "duration": 10,
        "file": file_name,
        "type": type
    };

    data['users'][author]['dances'][name]['cues'].push(cue);

    var content = JSON.stringify(data);

    fs.writeFile('data.json', content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("New cue saved");
    });
}

app.post(
    "/upload_picture/:author/:name/:cue_name",
    upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {
        var file = './uploads/pictures/' + req.file.originalname;

        var ext = path.extname(req.file.originalname);

        if (!(ext === '.jpg' || ext === '.png' || ext === '.jpeg')) {
            return res
                .status(500)
                .contentType("text/plain")
                .end("Wrong file type! (use png and jpg)");
        }

        fs.rename(req.file.path, file, err => {
            if (err) return handleError(err, res);

            res
                .status(200)
                .contentType("text/plain")
                .redirect('back');
        });

        const author = req.params.author;
        const name = req.params.name;
        const cue_name = req.params.cue_name;

        saveCue(author, name, cue_name, file, ext);
    }
);

app.post(
    "/upload_audio/:author/:name/:cue_name",
    upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {
        var file = './uploads/audio/' + req.file.originalname;

        if (!(ext === '.mp3')) {
            return res
                .status(500)
                .contentType("text/plain")
                .end("Wrong file type! (use mp3)");
        }

        fs.rename(req.file.path, file, err => {
            if (err) return handleError(err, res);

            res
                .status(200)
                .contentType("text/plain")
                .redirect('back');
        });

        const author = req.params.author;
        const name = req.params.name;
        const cue_name = req.params.cue_name;

        saveCue(author, name, cue_name, file, ext);
    }
);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
