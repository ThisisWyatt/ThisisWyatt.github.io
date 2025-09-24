// justifiedGallery
$('#gallery').justifiedGallery({
  rowHeight: 150,
  margins: 3,
  cssAnimation: true,  // 启用CSS动画
  waitThumbnailsLoad: false,  // 不等待缩略图加载完成
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