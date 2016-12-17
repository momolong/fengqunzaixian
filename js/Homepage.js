/*轮播图配置*/

$(function() {
    $("#slider").easySlider( {
        slideSpeed: 500,
        paginationSpacing: "15px",
        paginationDiameter: "12px",
        paginationPositionFromBottom: "40px",
        slidesClass: ".slides",
        controlsClass: ".controls",
        paginationClass: ".pagination"
    });
});