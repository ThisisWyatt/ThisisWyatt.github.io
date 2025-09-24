// 等待图片加载完成后再初始化
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        // 等待所有图片加载完成
        const images = gallery.querySelectorAll('img');
        let loadedCount = 0;
        
        if (images.length === 0) {
            // 直接初始化
            initJustifiedGallery();
        } else {
            images.forEach(img => {
                if (img.complete) {
                    loadedCount++;
                } else {
                    img.addEventListener('load', () => {
                        loadedCount++;
                        if (loadedCount === images.length) {
                            initJustifiedGallery();
                        }
                    });
                }
            });
            
            // 如果所有图片都已经加载完成
            if (loadedCount === images.length) {
                initJustifiedGallery();
            }
        }
    }
});

function initJustifiedGallery() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        // 添加延迟确保样式已应用
        setTimeout(() => {
            // 初始化 justifiedGallery
            // 具体初始化代码依赖于你使用的 justifiedGallery 版本
        }, 100);
    }
}