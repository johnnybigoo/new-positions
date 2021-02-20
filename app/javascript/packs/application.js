require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap'
import './src/application.scss'


$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

require("trix")
require("@rails/actiontext")

$(document).ready(function () {
  if ($('.count-textarea').length > 0) {
    $('#current').text($('.count-textarea').val().length);
    $('.count-textarea').keyup(function () {
      var characterCount = $(this).val().length;
      $('#current').text(characterCount);
    });
  }

  $('.copy-url').click(function (e) {
    e.preventDefault();
    var url = $(this).attr('data-clipboard-text');
    navigator.clipboard.writeText(url);
    alert('URL copiada com sucesso.')
  })
});