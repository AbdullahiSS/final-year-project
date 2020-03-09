/* ==========================================================================
Login and registration js
========================================================================== */

$(document).ready(function () {

  "use strict";

  console.log('hii');

  $('.login-register').on('click', function () {
      var $this = $(this);
      $this.addClass('is-loading');
      setTimeout(function () {
          if ($this.text() === 'Register') {
              $this.removeClass('is-loading').html('Login');
          } else {
              $this.removeClass('is-loading').html('Register')
          }
          $('.form-wrapper').toggleClass('is-active');
      }, 1200)
  })

});
