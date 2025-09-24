// justifiedGallery
$('#gallery').justifiedGallery({
  rowHeight: 136,
  margins: 3
});

// lazyload
$("img.lazy").lazyload({
  effect: "fadeIn"
});


if ($.fancybox) {
  $('[data-fancybox]').fancybox({
    protect: true
  });
}