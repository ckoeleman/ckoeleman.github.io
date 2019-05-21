$('.detail-controls a.close').click(function() {
  $("#work").toggleClass("detail-open");
  $("#nav").toggleClass("navshow");
  $("body").toggleClass("modal-open")
  $(".work-detail").empty();

  return false;
});



$(".work-detail a.next, .work-detail a.prev").click(function() {
    $(".work-detail").empty().append("<div id='loading'></div>");
    // $.ajax({ url: this.href, success: function(html) {
        $(".work-detail").empty().append(html);
        }
});
return false;
});