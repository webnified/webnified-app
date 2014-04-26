/**
 * MailchimpController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var mcapi = require( "mailchimp-api" );
var mc = new mcapi.Mailchimp( "1664690726feb96b5201d9309878b83f-us8" );
var getLists = function getLists( callback ){
	mc.lists.list( { },
		function onList( result ){
			var lists = result.data;
			callback( lists );
		} );
};

var crypto = require( "crypto" );
var subscribeEngine = function subscribeEngine( req, res, lists ){
	var webnifiedID = lists[ 0 ].id;

	var email = req.param( "email" );
	var name = req.param( "name" );

	var hashEmail = crypto.createHash( "md5" ).update( email, "utf8" ).digest( "hex" );
	//TODO: Add request if the user has already confirmed.

	if( hashEmail in req.session ){
		var subscriptionTimestamp = req.session[ hashEmail ];
		var error = new Error( "subscription for: " + email + " already sent during: " + subscriptionTimestamp );
		console.error( error );
		res.json( {
			"status": "error",
			"error": error,
			"subscriptionAlreadySent": true,
			"hasError": true
		} );
	}else{
		req.session[ hashEmail ] = Date.now( );
		req.session.currentlySubscribing = true;
		mc.lists.subscribe( {
			"id": webnifiedID,
			"email": {
				"email": req.param( "email" )
			},
			"merge_vars": {
				"FULLNAME": req.param( "name" )
			}
		}, function onSuccess( result ){
			res.json( {
				"status": "success",
				"subscriptionSuccessful": true
			} );
		}, function onError( error ){
			res.json( {
				"status": "error",
				"data": error,
				"hasError": true,
				"subscriptionAlreadySent": ( error.name === "List_AlreadySubscribed" ),
				"subscriptionFailed": ( error.name === "ValidationError" )
			} );
		} );
	}
};

module.exports = {
	/**
	 * Action blueprints:
	 *    `/mailchimp/subscribe`
	 */
	subscribe: function subscribe(req, res) {
		getLists( function callback( lists ){
			subscribeEngine( req, res, lists );
		} );
	},

	newsubscribe: function newsubscribe( req, res ){
		req.session.currentlySubscribing = false;
		res.json( {
			"status": "success"
		} );
	},


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MailchimpController)
   */
  _config: {}

  
};
