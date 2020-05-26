/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  $(function () {
    console.log("form fields touched");
    $("#emailError").hide();
    $("#subjectError").hide();
    $("#form-submit-message").hide();
    var error_email = false;

    $("#name").focusin(function () {
      $("#form-submit-error").hide();
      $("#form-submit-message").hide();
    });
    $("#email").focusin(function () {
      $("#form-submit-error").hide();
      $("#form-submit-message").hide();
    });
    $("#subject").focusin(function () {
      $("#form-submit-error").hide();
      $("#form-submit-message").hide();
    });
    $("#message").focusin(function () {
      $("#form-submit-error").hide();
      $("#form-submit-message").hide();
    });

    //email error
    $("#email").focusout(function () {
      var pattern = new RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
      if (pattern.test($("#email").val())) {
        $("#emailError").hide();
      } else {
        console.log("invalid email");
        $("#emailError").html("Please enter a valid email id.");
        $("#emailError").show();
        error_email = true;
      }
    });

    // subject error
    $("#subject").keypress(function () {
      if (this.value.length > 50) {
        $("#subjectError").hide();
        return false;
      }
      if (
        $("#subject").focusout(function () {
          $("#subjectError").hide();
        })
      );
      $("#subjectError").html(
        "Remaining characters : " + (100 - this.value.length)
      );
      $("#subjectError").show();
    });
  });

  $("#contact-form").submit(function (event) {
    event.preventDefault();
    var emailInput = $("#email").val();
    var subjectInput = $("#subject").val();
    var textMsgInput = $("#message").val();

    var nameInput = $("#name").val();

    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("");
    if (emailInput && subjectInput && textMsgInput && nameInput) {
      $("#form-submit-message").html(
        "I have recevied your message! Thanks for writing."
      );
      $("#form-submit-error").hide();
      $("#form-submit-message").show();
    } else {
      $("#form-submit-error").html(
        "Please fill in the details before submitting."
      );
      $("#form-submit-error").show();
    }
  });
  $("#clear-form").click(function () {
    console.log("clear form");
    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("");
    $("#form-submit-error").hide();
    $("#form-submit-message").hide();
    $("#emailError").hide();
    $("#subjectError").hide();
  });

  var $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: [null, "736px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Scrolly.
  $("#nav a, .scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height();
    },
  });
})(jQuery);
