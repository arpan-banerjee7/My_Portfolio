/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  $(function () {
    $("#emailError").hide();
    $("#subjectError").hide();
    $("#form-submit-message").hide();
    var error_email = false;

    //check email error function
    function check_email() {
      var pattern = new RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
      if (pattern.test($("#email").val())) {
        $("#emailError").hide();
      } else {
        console.log("invalid email");
        $("#emailError").html("Please enter a valid email id.");
        $("#emailError").show();
        error_email = true;
      }
    }

    // check subject error fucntion
    function check_subject() {
      if ($("#subject").val().length > 50) {
        $("#subjectError").hide();
        return false;
      }
      if (
        $("#subject").focusout(function () {
          $("#subjectError").hide();
        })
      );
      $("#subjectError").html(
        "Remaining characters : " + (100 - $("#subject").val().length)
      );
      $("#subjectError").show();
    }

    //clear form function
    function clear_form() {
      $("#name").val("");
      $("#email").val("");
      $("#subject").val("");
      $("#message").val("");
    }

    //control messages on focus
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

    $("#subject").keypress(function () {
      check_subject();
    });

    $("#email").focusout(function () {
      check_email();
    });

    // $("#contact-form").submit(function (event) {
    //   event.preventDefault();
    //   var emailInput = $("#email").val();
    //   var subjectInput = $("#subject").val();
    //   var textMsgInput = $("#message").val();

    //   var nameInput = $("#name").val();

    //   $("#name").val("");
    //   $("#email").val("");
    //   $("#subject").val("");
    //   $("#message").val("");
    //   if (emailInput && subjectInput && textMsgInput && nameInput) {
    //     let formData = JSON.stringify({ emailInput, subjectInput, textMsgInput });
    //     // $.post(
    //     //   "http://localhost:8080/formData",
    //     //   formData,
    //     //   "application/json; charset=utf-8",
    //     //   function (data, status) {
    //     //     alert(status);
    //     //   }
    //     // );

    //     // $.ajax({
    //     //   url: "http://localhost:8080/formData",
    //     //   type: "POST",
    //     //   dataType: "json",
    //     //   contentType: "application/json; charset=utf-8",
    //     //   data: formData,
    //     //   success: function (data) {
    //     //     // alert(data);
    //     //   },
    //     //   error: function (data) {
    //     //     //alert(data);
    //     //   },
    //     // });
    //     $("#form-submit-message").html(
    //       "I have recevied your message! Thanks for writing."
    //     );
    //     $("#form-submit-error").hide();
    //     $("#form-submit-message").show();
    //   } else {
    //     $("#form-submit-error").html(
    //       "Please fill in the details before submitting."
    //     );
    //     $("#form-submit-error").show();
    //   }
    // });
    // $("#clear-form").click(function () {
    //   console.log("clear form");
    //   $("#name").val("");
    //   $("#email").val("");
    //   $("#subject").val("");
    //   $("#message").val("");
    //   $("#form-submit-error").hide();
    //   $("#form-submit-message").hide();
    //   $("#emailError").hide();
    //   $("#subjectError").hide();
    // });

    //netlify fprm submission
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      error_email = false;

      //validating email before submission
      check_email();

      var emailInput = $("#email").val();
      var subjectInput = $("#subject").val();
      var textMsgInput = $("#message").val();
      var nameInput = $("#name").val();

      if (
        emailInput &&
        subjectInput &&
        textMsgInput &&
        nameInput &&
        error_email == false
      ) {
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function () {
          alert("Thank you!");
          clear_form();
        });
      } else {
        clear_form();
        $("#form-submit-error").html(
          "Please fill in the details before submitting."
        );
        $("#form-submit-error").show();
      }
    });

    $("#clear-form").click(function () {
      $("#name").val("");
      $("#email").val("");
      $("#subject").val("");
      $("#message").val("");
      $("#form-submit-error").hide();
      $("#form-submit-message").hide();
      $("#emailError").hide();
      $("#subjectError").hide();
    });
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
