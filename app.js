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
app.get('/dance', dance.view);
app.get('/create', create.view);

const multer = require("multer");

const handleError = (err, res) => {
    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};

const upload = multer({
    dest: "/uploads/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

app.post(
    "/upload",
    upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {
        var file = 'uploads/image.png';

        fs.rename(req.file.path, file, err => {
            if (err) return handleError(err, res);

            res
                .status(200)
                .contentType("text/plain")
                .redirect('back');
        });
    }
);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
