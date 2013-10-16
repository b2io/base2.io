(function ($) {

  $(document).ready(function () {

    // Setup scroll-spy behavior on the navigation.
    $('body').scrollspy({ target: '#navigation' });

    // When someone triggers a back-to-top link, deactivate the navigation elements.
    $('a[href="#"]').click(function () {
      $('#navigation li.active').removeClass('active');
    });

    // Override the default form submission behavior.
    $('#lead-form').on('submit', function (event) {
      // Prevent the submission.
      event.preventDefault();

      // Pull the values out of the UI.
      var name = $('#lead-name').val(),
        email = $('#lead-email').val(),
        phoneNumber = $('#lead-phone').val(),
        budget = $('#lead-budget').val(),
        description = $('#lead-description').val(),mailtoUrl;

      // TODO: Validate the form fields.

      // Convert the fields to a `mailto` link and open it:
      mailtoUrl = 'mailto:info@base2.io?subject=Let\'s%20Work%20Together!&body=' + encodeURIComponent('Name: ' + name + '\n' + 'Email: ' + email + '\n' + 'Phone: ' + phoneNumber + '\n' + 'Budget: ' + budget + '\n' + 'Description: ' + description);
      window.open(mailtoUrl, '_blank');
    });

  });

})(jQuery);