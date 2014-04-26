var childprocess = require( "child_process" );
var task = childprocess.exec( "cd ./sails/webnified-app/ && npm install && npm start --prod 1> ../../output.log 2> ../../error.log",
	{
		"env": process.env
	} );

task.stdout.on( "data",
	function onData( data ){
		console.log( data );
	} );

task.stderr.on( "data",
	function onError( data ){
		console.error( data );
	} );


while( true );