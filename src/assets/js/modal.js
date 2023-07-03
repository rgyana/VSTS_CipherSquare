$("#yt-video-link").click(function () {
  var src = "https://www.youtube.com/embed/YE7VzlLtp-4";
  $("#videoMedia1").modal("show");
  $("<iframe>")
    .attr({
      src: src,
      width: "560",
      height: "315",
      allow: "encrypted-media",
    })
    .css("border", "0")
    .appendTo("#videoMedia1 .video-container");
});
$("#vimeo-video-link").click(function () {
  var src = "https://player.vimeo.com/video/1084537";
  $("#videoMedia2").modal("show");
  $("<iframe>")
    .attr({
      src: src,
      width: "560",
      height: "315",
      allow: "encrypted-media",
    })
    .css("border", "0")
    .appendTo("#videoMedia2 .video-container");
});
$("#videoMedia1 button, #videoMedia2 button").click(function () {
  $("#videoMedia1 iframe, #videoMedia2 iframe").removeAttr("src");
});
