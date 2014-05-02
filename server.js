//Read local configuration.
var fs = require( "fs" );
if( fs.existsSync( "./local.json" ) ){
	global.localData = JSON.parse( fs.readFileSync( "./local.json" ) );
	for( var key in localData ){
		process.env[ key ] = localData[ key ];
	}
}

//Set the logging namespace
var os = require( "os" );
var localNamespace;
if( "OPENSHIFT_APP_UUID" in process.env
	&& process.env.OPENSHIFT_APP_UUID === "535326cbe0b8cd7436000030" )
{
	localNamespace = "openshift-production";
}else if( "localNamespace" in process.env ){
	localNamespace = localData.localNamespace;
}else{
	localNamespace = os.hostname( );
}

//Add papertrail logging.
var winston = require( "winston" );
require( "winston-papertrail" ).Papertrail;

var logger = new winston.Logger( {
	"transports": [
		new winston.transports.Papertrail( {
			"host": "logs.papertrailapp.com",
			"port": 53255,
			"logFormat": function onLogFormat( level, message ){
				return localNamespace + " " + level + " " + message;
			}
		} )
	]
} );

var xconsole = {
	"log": console.log,
	"debug": console.debug,
	"warn": console.warn,
	"info": console.info,
	"error": console.error
};

console.log = function log( level, message ){
	logger.info( level, message );
	xconsole.log( level, message );
};

console.debug = function debug( ){
	logger.debug( message );
	xconsole.debug( message );
};

console.warn = function warn( ){
	logger.warn( message );
	xconsole.warn( message );
};

console.info = function info( message ){
	logger.info( message );
	xconsole.info( message );
};

console.error = function error( message ){
	logger.error( message );
	xconsole.error( message );
};

//Run the sub app for sailsjs.
var childprocess = require( "child_process" );
var command = [
	"cd ./sails/webnified-app/",
	"npm install",
	"npm update",
	"npm start"
];
var task = childprocess.exec( command.join( " && " ),
	{
		"env": process.env
	} );

task.stdout.on( "data",
	function onData( data ){
		console.info( data );
	} );

task.stderr.on( "data",
	function onError( data ){
		console.error( data );
	} );

var host = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

//Add a managing server.
var express = require( "express" );
var bodyParser = require( "body-parser" );
var compression = require( "compression" );
var http = require( "http" );

var app = express( );
var server = http.createServer( app );

app.use( bodyParser( ) );
app.use( compression( ) );

app.get( "/ping",
	function onPing( request, response ){
		response.json( {
			"status": "success",
			"date": Date.now( )
		} );
	} );

var io = require( "socket.io" );
io = io.listen( server );
server.listen( 9090, host );

io.sockets.on( "connection",
	function onConnection( socket ){
		socket.emit( "news", { "hello": "world" } );
		socket.on( "my other event",
			function onEvent( data ){
				console.log( data );
			} );
	} );
