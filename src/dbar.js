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
    if (perc !== 1 && perc !== 0 && dbar.el().hasClass('off')) {
      dbar.i();
    }
    return dbar.el().find('.inner > .full').css('width', (perc * 100) + "%");
  },
  set: function(options) {
    if (options.barColor !== void 0) {
      dbar.el().find('.full').css('background-color', options.barColor);
    }
    if (options.gradientColor !== void 0) {
      dbar.el().css('background-color', options.gradientColor);
      dbar.el().find('.gradient').css('background', "linear-gradient(90deg, " + options.gradientColor + ", rgba(255,255,255,1)");
    }
    if (options.height !== void 0) {
      return dbar.el().css('height', options.height);
    }
  },
  d: function() {
    dbar.perc(1);
    dbar.el().removeClass('on').addClass('off');
    return setTimeout(function() {
      return dbar.perc(0);
    }, 700);
  }
};
