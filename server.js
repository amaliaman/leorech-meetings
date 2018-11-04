const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();

const SERVER_PORT = process.env.PORT || 5000;

// Dev app
if (app.get('env') === 'development') {
	require('dotenv').load();
	const cors = require('cors');
	app.use(cors());
}

/* // Redirect from Heroku to live domain
app.use((req, res, next) => {
	const host = req.get('Host');
	if (host === process.env.REDIRECT_FROM) {
		res.redirect(301, process.env.REDIRECT_TO);
	}
	next();
}); */

// APIs
const departmentApi = require('./server/api/departmentApi');
const attendeeApi = require('./server/api/attendeeApi');

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/departments', departmentApi);
app.use('/attendees', attendeeApi);

// Production app
/* if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
} */

// Error handling
app.use(function (req, res) {
	res.status(404).send('Page not found');
});
app.use(function (error, req, res, next) {
	res.status(500).send(`An error has occured: ${error}`);
});

app.listen(SERVER_PORT, () => { console.log(`${getTimestamp()} - App listening on port ${SERVER_PORT}`) });

function getTimestamp() { return moment().format('YYYY-MM-DD HH:mm:ss') }

// =============================================================================================
// Uncomment to initialize the DB
// =============================================================================================
// const initTables = require('./server/utils/dbInit');
// // true - also populate with sample data, false - only create the tables
// initTables(true);