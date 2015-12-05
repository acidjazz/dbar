var dbar;

dbar = {
  cache: {
    el: false
  },
  el: function() {
    if (dbar.cache.el === false) {
      dbar.cache.el = $('.dbar');
    }
    return dbar.cache.el;
  },
  i: function() {
    dbar.el().removeClass('off').addClass('on');
    return dbar.perc(0);
  },
  perc: function(perc) {
    return dbar.el().find('.inner > .full').css('width', (perc * 100) + "%");
  },
  d: function() {
    dbar.perc(1);
    dbar.el().removeClass('on').addClass('off');
    return setTimeout(function() {
      return dbar.perc(0);
    }, 700);
  }
};
