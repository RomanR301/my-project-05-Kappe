$(function(){

  'use strict';

  $('.info').click(function() {
    $('.info-box').toggleClass('info-box-open');
  });

  $('.skills-progress__bar').each(function(){
    let width = $(this).data('skill')
    $(this).css('width', width + '%')
  });

});