(function ($, SmoothScroll) {

  SmoothScroll.init();

  // Set defaults for jQuery Validator to work with Bootstrap 3.
  $.validator.setDefaults({
    errorElement: 'span',
    errorClass: 'help-block',

    highlight: function (element) {
      $(element).closest('.form-group').addClass('has-error');
    },

    unhighlight: function (element) {
      $(element).closest('.form-group').removeClass('has-error');
    },

    errorPlacement: function (error, element) {
      if (element.parent('.input-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $( '.jobs__file-input' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				$label.find( 'span' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
	});

  //collapse navbar when link clicked
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
  });

  $(function () {
    // Set the banner height to be the window height.
    $('#banner').height($(window).height());

    // Setup validation for the lead generation form.
    $('#developer-application').validate({
      rules: {
        'name': {
          required: true
        },

        'email': {
          required: true,
          email: true
        },

        'resume': {
          required: true
        }
      },

      messages: {
        'name': 'Please enter your name.',
        'email': 'Please enter a valid email address.',
        'resume': 'Please provide an up to date resume.'
      },

      invalidHandler: function () {
        // Track the attempted submission.
        _gaq.push(['_trackEvent', 'Lead', 'Send', 'Invalid']);
      },

      submitHandler: function (form) {
        // Track the successful submission.
        _gaq.push(['_trackEvent', 'Lead', 'Send', 'Valid']);

        form.submit();
      }
    });

    $('#apprentice-application').validate({
      rules: {
        'apprentice-name': {
          required: true
        },

        'apprentice-email': {
          required: true,
          email: true
        },

        'apprentice-resume': {
          required: true
        }
      },

      messages: {
        'apprentice-name': 'Please enter your name.',
        'apprentice-email': 'Please enter a valid email address.',
        'apprentice-resume': 'Please provide an up to date resume.'
      },

      invalidHandler: function () {
        // Track the attempted submission.
        _gaq.push(['_trackEvent', 'Lead', 'Send', 'Invalid']);
      },

      submitHandler: function (form) {
        // Track the successful submission.
        _gaq.push(['_trackEvent', 'Lead', 'Send', 'Valid']);

        form.submit();
      }
    });

  });

})(jQuery, smoothScroll);

$(document).ready(
  function() {
    $(".jobs__application-opener--developer").click(function() {
      $("#developer-application").css("display","block");
      $("#apprentice-application").css("display","none");
    });

    $(".jobs__application-closer--developer").click(function() {
      $("#developer-application").css("display","none");
    });

    $(".jobs__application-opener--apprentice").click(function() {
      $("#apprentice-application").css("display","block");
      $("#developer-application").css("display","none");
    });

    $(".jobs__application-closer--apprentice").click(function() {
      $("#apprentice-application").css("display","none");
    });
  });
