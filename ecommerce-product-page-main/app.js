// Change product image by clicking on thumbnail 
$(".thumbnail").click(function() {
    let thumbnailSrc = $(this).attr("src");
    let imgSrc = thumbnailSrc.replace("-thumbnail", "");
    $(".img-large").attr("src", imgSrc);
});

// Lightbox
// If screen is larger than 768px
window.addEventListener('load', e => {
    $(".img-large").click( () => {
        if (window.innerWidth >= 768) {
            clickModal();
        } 
    });
});

function clickModal() {
    $(".modal").css("display", "block");
    $(".thumbnails-modal").css("display", "block");
}

$(".close").click(function(){
    $(".modal").css("display", "none");
});

// Slideshow
$(".prev").click(function() {
    console.log("prev", minusSlides(1));
});

$(".next").click(function() {
    $(".img-large").attr("src", plusSlides(1));  
});

function plusSlides(n) {
    let currentImg = $(".img-large").attr("src");
    let slideNum = parseInt(currentImg.slice(21,22));
    if (slideNum < 4) {
        slideNum += n;
        
    } else {
        slideNum = 1;
    }
    $(".img-large").attr("src", "images/image-product-" + slideNum + ".jpg");
}

function minusSlides(n) {
    let currentImg = $(".img-large").attr("src");
    let slideNum = parseInt(currentImg.slice(21,22));
    if (slideNum > 1) {
        slideNum -= n;
        
    } else {
        slideNum = 4;
    }
    $(".img-large").attr("src", "images/image-product-" + slideNum + ".jpg");
}
