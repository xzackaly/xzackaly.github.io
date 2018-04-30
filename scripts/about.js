(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

  // Typing effect
  /* Typing effect */
  (function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 120);
    };
  })(jQuery);

})(jQuery,'smartresize');

// About
  // ---------------------------
  if($('p').hasClass('about')) {
    var $introText = $('.intro h1');
    $introText.text('_');
    function typeText() {
      $introText.writeText('Hello, World!');
    }
    var alternate = true;
    var alternateCount = 0;
    var flashInterval = setInterval(function() {
      if(alternateCount == 4) {
        clearInterval(flashInterval);
        typeText();
      } else {
        if(alternate) {
          alternate = false;
          $introText.text('_');
        } else {
          alternate = true;
          $introText.html('&nbsp;');
        }
        alternateCount++;
      }
    }, 200); }

    