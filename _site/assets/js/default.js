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
    $('form').validate({
      rules: {
        'name': {
          required: true
        },

        'email': {
          required: true,
          email: true
        },

        'description': {
          required: true
        }
      },

      messages: {
        'name': 'Please enter your name.',
        'email': 'Please enter a valid email address.',
        'description': 'Please enter a description.'
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
