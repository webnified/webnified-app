( function module( ){
	$( "#subscription-form" ).ready( function onReady( ){
		$( "#subscribe-button" ).click( function onClick( ){
			var name = $( "#input-subscriber-name" ).val( );
			var email = $( "#input-subscriber-email" ).val( );

			if( !( name && email ) ){
				console.log( "Incomplete data." );
				//Inform the user here.
				return;
			}

			//Regex tester for email address here.
			if( !email ){
				console.log( "Invalid email address." );
				return;
			}

			socket.get( "/mailchimp/subscribe", {
				"name": name,
				"email": email
			}, function onResponse( response ){
				console.log( "Response: " + JSON.stringify( response ) );
				/*
					Response contains the following information

					On success: {
						"status": "success",
						"subscriptionSuccessful": true/false
					}

					On error: {
						"status": "error",
						"error": <error object>,
						"hasError": true/false,
						"subscriptionAlreadySent": true/false,
						"subscriptionFailed": true/false
					}
				*/

				if( response.hasError ){
					if( response.subscriptionFailed ){

					}else if( response.subscriptionAlreadySent ){

					}
				}else if( response.subscriptionSuccessful ){

				}
			} );
		} );
	} );
} )( );

