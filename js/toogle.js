$(document).ready(function() {
  $('.js-closeToggle').on('click', function() {
    // When clicking on .js-close, find the parent .js-page and add .is-closed to its classlist.
    $('.js-page').toggleClass('is-closed');
  })
});