$(document).ready(function () {


   $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
         $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }
   });

   $("a[href=#up]").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });

   $('img').hover(function () {
      var el = $(this)
      el.data('orig', el.attr('src'))
      el.attr('src', el.data('img2'))
   }, function () {
      $(this).attr('src', $(this).data('orig'))
   });

});