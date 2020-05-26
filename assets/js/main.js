!(function (e) {
  e(function () {
    console.log("form fields touched"),
      e("#emailError").hide(),
      e("#subjectError").hide(),
      e("#form-submit-message").hide();
    e("#name").focusin(function () {
      e("#form-submit-error").hide(), e("#form-submit-message").hide();
    }),
      e("#email").focusin(function () {
        e("#form-submit-error").hide(), e("#form-submit-message").hide();
      }),
      e("#subject").focusin(function () {
        e("#form-submit-error").hide(), e("#form-submit-message").hide();
      }),
      e("#message").focusin(function () {
        e("#form-submit-error").hide(), e("#form-submit-message").hide();
      }),
      e("#email").focusout(function () {
        new RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i).test(
          e("#email").val()
        )
          ? e("#emailError").hide()
          : (console.log("invalid email"),
            e("#emailError").html("Please enter a valid email id."),
            e("#emailError").show(),
            !0);
      }),
      e("#subject").keypress(function () {
        if (this.value.length > 50) return e("#subjectError").hide(), !1;
        e("#subject").focusout(function () {
          e("#subjectError").hide();
        }),
          e("#subjectError").html(
            "Remaining characters : " + (100 - this.value.length)
          ),
          e("#subjectError").show();
      });
  }),
    e("#contact-form").submit(function (r) {
      r.preventDefault();
      var i = e("#email").val(),
        o = e("#subject").val(),
        s = e("#message").val(),
        m = e("#name").val();
      e("#name").val(""),
        e("#email").val(""),
        e("#subject").val(""),
        e("#message").val(""),
        i && o && s && m
          ? (e("#form-submit-message").html(
              "I have recevied your message! Thanks for writing."
            ),
            e("#form-submit-error").hide(),
            e("#form-submit-message").show())
          : (e("#form-submit-error").html(
              "Please fill in the details before submitting."
            ),
            e("#form-submit-error").show());
    }),
    e("#clear-form").click(function () {
      console.log("clear form"),
        e("#name").val(""),
        e("#email").val(""),
        e("#subject").val(""),
        e("#message").val(""),
        e("#form-submit-error").hide(),
        e("#form-submit-message").hide(),
        e("#emailError").hide(),
        e("#subjectError").hide();
    });
  var r = e(window),
    i = e("body"),
    o = e("#nav");
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: [null, "736px"],
  }),
    r.on("load", function () {
      window.setTimeout(function () {
        i.removeClass("is-preload");
      }, 100);
    }),
    e("#nav a, .scrolly").scrolly({
      speed: 1e3,
      offset: function () {
        return o.height();
      },
    });
})(jQuery);
