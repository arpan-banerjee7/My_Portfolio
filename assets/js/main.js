/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
//testing a dummy commit after changing git user name
(function ($) {
  //contact form functions
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
          $("#form-submit-message").html(
            "I have recevied your message! Thanks for writing."
          );
          $("#form-submit-message").show();
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

    $(".post-wrapper").slick({
      slidesToShow: 2,
      //add scrooll
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $(".next"),
      prevArrow: $(".prev"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });

  // Scrolly.
  $("#nav a, .scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height();
    },
  });
})(jQuery);
