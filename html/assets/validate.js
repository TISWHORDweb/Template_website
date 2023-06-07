/* <![CDATA[ */

// Jquery validate home contact form
jQuery(document).on('ready', function(){

	$('#contact_home').submit(function(){
	'use strict';
		var action = $(this).attr('action');

		$("#message-home").slideUp(750,function() {
		$('#message-home').hide();

 		$('#submit-contact-home')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			name_contact_home: $('#name_contact_home').val(),
			email_contact_home: $('#email_contact_home').val(),
			phone_contact_home: $('#phone_contact_home').val(),
			message_contact_home: $('#message_contact_home').val()
		},
			function(data){
				document.getElementById('message-home').innerHTML = data;
				$('#message-home').slideDown('slow');
				$('#contact_home .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-contact-home').removeAttr('disabled');
				if(data.match('success') != null) $('#contact_home').slideUp('slow');

			}
		);

		});

		return false;

	});
});

/// Jquery validate newsletter
jQuery(document).on('ready', function(){

	$('#newsletter_2').submit(function(){

		var action = $(this).attr('action');

		$("#message-newsletter_2").slideUp(750,function() {
		$('#message-newsletter_2').hide();
		
		$('#submit-newsletter_2')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');

		$.post(action, {
			email_newsletter_2: $('#email_newsletter_2').val()
		},
			function(data){
				document.getElementById('message-newsletter_2').innerHTML = data;
				$('#message-newsletter_2').slideDown('slow');
				$('#newsletter_2 .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-newsletter_2').removeAttr('disabled');
				if(data.match('success') != null) $('#newsletter_2').slideUp('slow');

			}
		);

		});

		return false;

	});

});

/// Jquery validate Submit URL
jQuery(document).ready(function(){

	$('#analysis').submit(function(){

		var action = $(this).attr('action');

		$("#message-analysis").slideUp(750,function() {
		$('#message-analysis').hide();
		
		$('#submit-analysis')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');

		$.post(action, {
			name_analysis: $('#name_analysis').val(),
			email_analysis: $('#email_analysis').val()
		},
			function(data){
				document.getElementById('message-analysis').innerHTML = data;
				$('#message-analysis').slideDown('slow');
				$('#analysis .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-analysis').removeAttr('disabled');
				if(data.match('success') != null) $('#analysis').slideUp('slow');

			}
		);

		});

		return false;

	});

});
// Jquery validate form quote
jQuery(document).on('ready', function(){

	$('#quoteform').submit(function(){
	'use strict';
		var action = $(this).attr('action');

		$("#message-quote").slideUp(750,function() {
		$('#message-quote').hide();

 		$('#submit-quote')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			name_quote: $('#name_quote').val(),
			lastname_quote: $('#lastname_quote').val(),
			email_quote: $('#email_quote').val(),
			phone_quote: $('#phone_quote').val(),
			url_quote: $('#url_quote').val(),
			message_quote: $('#message_quote').val(),
			verify_quote: $('#verify_quote').val()
		},
			function(data){
				document.getElementById('message-quote').innerHTML = data;
				$('#message-quote').slideDown('slow');
				$('#quoteform .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-quote').removeAttr('disabled');
				if(data.match('success') != null) $('#quoteform').slideUp('slow');

			}
		);

		});

		return false;

	});
});
// Jquery validate form contact
jQuery(document).on('ready', function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message-contact").slideUp(750,function() {
		$('#message-contact').hide();

 		$('#submit-contact')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			name_contact: $('#name_contact').val(),
			lastname_contact: $('#lastname_contact').val(),
			email_contact: $('#email_contact').val(),
			phone_contact: $('#phone_contact').val(),
			message_contact: $('#message_contact').val(),
			verify_contact: $('#verify_contact').val()
		},
			function(data){
				document.getElementById('message-contact').innerHTML = data;
				$('#message-contact').slideDown('slow');
				$('#contactform .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-contact').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});
		return false;
	});
});

  /* ]]> */