var childprocess = require( "child_process" );
var command = [
	"cd ./sails/webnified-app/",
	"npm install 1> ../../output.log 2> ../../error.log",
	"npm start --prod 1> ../../output.log 2> ../../error.log"
];
var task = childprocess.exec( command.join( " && " ),
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