(function(window, $) {
  var $body, $waitCursorDiv, originalBodyHeight;
  
  function showWaitCursor() {
    originalBodyHeight = $body.css('height');
    $body.css('height', '100%');
    $body.append($waitCursorDiv);
  }
  
  function hideWaitCursor() {
    $body.css('height', originalBodyHeight);
    $waitCursorDiv.remove();
  }
  
  $(function() {
    $body = $('body');
    originalBodyHeight = $body.css('height');
    $waitCursorDiv = $('<div style="cursor: wait; z-index: 99999; position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></div>');    
    
    $(window.document).ajaxStart(showWaitCursor);
    $(window.document).ajaxStop(hideWaitCursor);
  });
  
})(window, jQuery);
