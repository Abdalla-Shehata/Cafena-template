$(function () {
    'use strict'
    // Add Class Active On list-menu buttons here li 
    $('.menu .list-menu li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Show ListItem images Menu
    $('.menu .list-menu li').click(function(){
        $('.menu .images-box > div').hide();
        $($(this).data('filter')).fadeIn(1000);
    });

    // you can merge them 
});