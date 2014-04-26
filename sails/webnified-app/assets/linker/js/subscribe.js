( function module( ){
	var subscriptionPane = $( "#subscription-pane" );
	subscriptionPane.ready( function onReady( ){
		var nameInput = $( "#input-subscriber-name" );
		var emailInput = $( "#input-subscriber-email" );
		var promptContainer = $( "#prompt-input-message" );
		
		var subscriptionForm = $( "#subscription-form" );
		var stateSubscriptionSuccessful = $( "#state-subscription-successful" );
		var stateSubscriptionFailed = $( "#state-subscription-failed" );
		var stateAlreadySubscribed = $( "#state-already-subscribed" );
		var stateServerError = $( "#state-server-error" );

		var hideAllComponents = function hideAllComponents( ){
			promptContainer.addClass( "hidden" );
			stateSubscriptionSuccessful.addClass( "hidden" );
			stateSubscriptionFailed.addClass( "hidden" );
			stateAlreadySubscribed.addClass( "hidden" );
			stateServerError.addClass( "hidden" );
		};

		if( !subscriptionForm.hasClass( "hidden" ) ){
			hideAllComponents( );	
		}

		var onChange = function onChange( ){
			if( nameInput.val( ) ){
				hideAllComponents( );
			}
			if( emailInput.val( ) ){
				hideAllComponents( );
			}
		};
		
		nameInput.change( onChange ).keypress( onChange );
		emailInput.change( onChange ).keypress( onChange );

		$( "#different-person-subscribe, #new-person-subscribe" ).click( function onClick( ){
			socket.get( "/mailchimp/newsubscribe",
				function onResponse( ){
					location.reload( );
				} );
		} );

		$( "#subscribe-button" ).click( function onClick( ){
			var name = nameInput.val( );
			var email = emailInput.val( );	

			var promptMessage = promptContainer.find( "#prompt-message" );
			if( !( name && email ) ){
				promptContainer.removeClass( "hidden" );
				console.log( "Incomplete data." );
				//Inform the user here.
				if( !name ){
					promptMessage.text( "You haven't specified your name." );	
				}else if( !email ){
					promptMessage.text( "You haven't specified your email." );
				}
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
				hideAllComponents( );
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
					if( response.subscriptionAlreadySent ){
						subscriptionForm.addClass( "hidden" );
						stateAlreadySubscribed.removeClass( "hidden" );
					}else if( response.subscriptionFailed ){
						stateSubscriptionFailed.removeClass( "hidden" );
					}
				}else if( response.subscriptionSuccessful ){
					subscriptionForm.hide( );
					stateSubscriptionSuccessful.removeClass( "hidden" );
				}
			} );
		} );

		socket.on( "error",
			function onError( ){
				console.debug( "Error: ", arguments );
				hideAllComponents( );
				//stateServerError.removeClass( "hidden" );
			} );

		socket.on( "connect_failed",
			function onFailedConnect( ){
				console.debug( "Connect failed: ", arguments );
				hideAllComponents( );
				stateServerError.removeClass( "hidden" );
			} );

		socket.on( "reconnect_failed",
			function onFailedConnect( ){
				console.debug( "Reconnect failed: ", arguments );
				hideAllComponents( );
				stateServerError.removeClass( "hidden" );
			} );

		socket.on( "reconnect",
			function onReconnected( ){
				location.reload( );
			} );
	} );
} )( );