//Read local configuration.
var fs = require( "fs" );
if( fs.existsSync( "./local.json" ) ){
	global.localData = JSON.parse( fs.readFileSync( "./local.json" ) );
	for( var key in localData ){
		process.env[ key ] = localData[ key ];
	}
}

//Add papertrail logging.
var winston = require( "winston" );
require( "winston-papertrail" ).Papertrail;

var logger = new winston.Logger( {
	"transports": [
		new winston.transports.Papertrail( {
			"host": "logs.papertrailapp.com",
			"port": 53255
		} )
	]
} );

logger.on( "error",
	function onError( error ){
		xconsole.error( error );
	} );

var xconsole = {
	"log": console.log,
	"debug": console.debug,
	"warn": console.warn,
	"info": console.info
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

console.info( JSON.stringify( process.env, null, "\t" ) );

//Run the sub app for sailsjs.
var childprocess = require( "child_process" );
var command = [
	"cd ./sails/webnified-app/",
	"npm install",
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


//while( true );