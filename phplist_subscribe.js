(function ($) {
  $(document).ready(function() {
    // Adjust the form action to POST to correct path on TM.org domain.
    $('form#phplist-subscribe-email-form').attr('action', 'http://www.techmission.org/');
  });
})(jQuery);
