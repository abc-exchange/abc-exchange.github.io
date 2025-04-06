(function ($) {
  "use strict";

  $(document).ready(function () {
    // ============================
    // Spinner
    // ============================
    var spinner = function () {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").addClass("hide"); // Apply hide class to spinner
        }
      }, 1000); // Adjust timeout to 1000ms
    };

    spinner();
  });
})(jQuery);
