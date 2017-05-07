var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var favicon = require('serve-favicon');

var sql = require('mssql');
var con = require('./SQLconfig');
var connection = new sql.Connection(con.config);
//store the connection
sql.globalConnection = connection;

var app = express();

// all environments
app.set('port', 5500);
app.set('views', path.join(__dirname, 'public/dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public/dist')));
app.use(express.static(path.join(__dirname, 'public/dist')));

// development only
//if ('development' == app.get('env')) {
//    app.use(express.errorHandler());
//}

var index = require('./routes/index');
var user = require('./routes/user');
var saleslines = require('./routes/saleslines');
var regions = require('./routes/region');
var login = require('./routes/login');
var gift = require('./routes/gifts');
var medspec = require('./routes/medspecs');
var visitImp = require('./routes/visitImportance');
var drug = require('./routes/drugs');
var userRegion = require('./routes/userRegion');
var dest = require('./routes/destination');
var visits = require('./routes/visits');
var visgift = require('./routes/visitGifts');
var visdrug = require('./routes/visitDrugs');
var dash = require('./routes/dashboard');
var promo = require('./routes/promo');
var plan = require('./routes/Plan');
var ims = require('./routes/ims');
var rprt = require('./routes/Reports');
var vac = require('./routes/vacation');
var cntct = require('./routes/contactUs')

app.use('/', index);
app.use('/api/user', user);
app.use('/api/lines', saleslines);
app.use('/api/region', regions);
app.use('/api/authenticate', login);
app.use('/api/gift', gift);
app.use('/api/medspec', medspec);
app.use('/api/visitimp', visitImp);
app.use('/api/drug', drug);
app.use('/api/userRegion', userRegion);
app.use('/api/dest', dest);
app.use('/api/visit', visits);
app.use('/api/visgift', visgift);
app.use('/api/visdrug', visdrug);
app.use('/api/dash', dash);
app.use('/api/promo', promo);
app.use('/api/plan', plan);
app.use('/api/ims', ims);
app.use('/api/rprt', rprt);
app.use('/api/vac', vac);
app.use('/api/cntct', cntct)

connection.connect(err => {
    if (err) {
        console.log('Failed to open a SQL Database connection.', err.stack);
    }
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});

connection.on('error', function (err) {
    console.log('Sql Connection Error.', err);
});