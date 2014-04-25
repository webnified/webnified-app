var extractPackageData = function extractPackageData( ){
	/*
		We need to extract the root package.json file first.
	*/
	var fs = require( "fs" );
	var packageData;
	var packageFilePath = "./package.json";
	if( !fs.existsSync( packageFilePath ) ){
		process.chdir( "../" );
	}
	if( fs.existsSync( packageFilePath ) ){
		packageData = fs.readFile( packageFilePath, { "encoding": "utf8" } );
		packageData = JSON.parse( packageData );

		return packageData;
	}else{
		var error = new Error( "cannot find root package.json file" );
		console.error( error );
		//We need to throw the error because everything fails if we don't have this data.
		throw error;
	}
};

var packageData = extractPackageData( );
//Put the package data as global data.
global.packageData = packageData;


var determineRepositoryEnvironment = function determineRepositoryEnvironment( callback ){
	/*
		Determine if the repository is in production mode.

		Note that the repository is in production mode iff
			that repository's branch is the master branch.
	*/
	var childprocess = require( "child_process" );
	var task = childprocess.exec( "git rev-parse --abbrev-ref HEAD" );
	
	var output = "";
	task.stdout.on( "data",
		function onData( data ){
			output += data;
		} );

	var error = "";
	task.stderr.on( "data",
		function onErrorData( data ){
			error += data;
		} );

	task.on( "close",
		function onClose( ){
			if( error ){
				error = new Error( error );
				console.error( error );
				callback( error );
			}else{

			}
		} )
};



var async = require( "async" );



var express = require( "express" );

