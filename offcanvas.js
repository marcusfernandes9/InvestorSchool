$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })

  $('#r-real').on('click', function () {
    $("#r-real").attr("class", "align-items-center square-perqunta bg-red rounded");
    setTimeout(function () {
      window.location.href = 'resposta-errada.html';
    }, 1500);
  })

  $('#r-bitcoin').on('click', function () {
    $('#r-bitcoin').attr("class", "align-items-center square-perqunta bg-red rounded");
    setTimeout(function () {
      window.location.href = 'resposta-errada.html'
    }, 1500);
  })

  $('#r-criptomoeda').on('click', function () {
    $('#r-criptomoeda').attr("class", "align-items-center square-perqunta bg-green rounded");
    setTimeout(function () {
      window.location.href = 'resposta-certa.html'
    }, 1500);
  })


})
