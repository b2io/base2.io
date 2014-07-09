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

  $(function () {
    // Set the banner height to be the window height.
    $('#banner').height($(window).height());

    // Setup validation for the lead generation form.
    $('form').validate({
      rules: {
        'lead[name]': {
          required: true
        },

        'lead[email]': {
          required: true,
          email: true
        },

        'lead[description]': {
          required: true
        }
      },

      messages: {
        'lead[name]': 'Please enter your name.',
        'lead[email]': 'Please enter a valid email address.',
        'lead[description]': 'Please enter a description.'
      },

      invalidHandler: function () {
        // Track the attempted submission.
        _gaq.push(['_trackEvent', 'Lead', 'Send', 'Invalid']);
      },

      submitHandler: function () {
        // Pull the values out of the UI.
        var name = $('[name="lead[name]"]').val(),
          email = $('[name="lead[email]"]').val(),
          phoneNumber = $('[name="lead[phone]"]').val(),
          budget = $('[name="lead[budget]"]').val(),
          description = $('[name="lead[description]"]').val(),
          mailtoUrl;

        // Track the successful submission.
        _gaq.push(['_trackEvent', 'Lead', 'Send', 'Valid']);

        // Convert the fields to a `mailto` link and open it:
        mailtoUrl = 'mailto:info@base2.io?subject=Let\'s%20Work%20Together!&body=' + encodeURIComponent('Name: ' + name + '\n' + 'Email: ' + email + '\n' + 'Phone: ' + phoneNumber + '\n' + 'Budget: ' + budget + '\n' + 'Description: ' + description);
        window.open(mailtoUrl, '_blank');
      }
    });

  });

})(jQuery, smoothScroll);
