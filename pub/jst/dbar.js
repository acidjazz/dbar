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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQUE7O0FBQUEsSUFBQSxHQUVFO0VBQUEsS0FBQSxFQUNFO0lBQUEsRUFBQSxFQUFJLEtBQUo7R0FERjtFQUdBLEVBQUEsRUFBSSxTQUFBO0lBQ0YsSUFBOEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFYLEtBQWlCLEtBQS9DO01BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFYLEdBQWdCLENBQUEsQ0FBRSxPQUFGLEVBQWhCOztBQUNBLFdBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztFQUZoQixDQUhKO0VBT0EsQ0FBQSxFQUFHLFNBQUE7SUFDRCxJQUFJLENBQUMsRUFBTCxDQUFBLENBQ0UsQ0FBQyxXQURILENBQ2UsS0FEZixDQUVFLENBQUMsUUFGSCxDQUVZLElBRlo7V0FHQSxJQUFJLENBQUMsSUFBTCxDQUFVLENBQVY7RUFKQyxDQVBIO0VBYUEsSUFBQSxFQUFNLFNBQUMsSUFBRDtXQUNKLElBQUksQ0FBQyxFQUFMLENBQUEsQ0FBUyxDQUFDLElBQVYsQ0FBZSxnQkFBZixDQUFnQyxDQUFDLEdBQWpDLENBQXFDLE9BQXJDLEVBQWdELENBQUMsSUFBQSxHQUFLLEdBQU4sQ0FBQSxHQUFVLEdBQTFEO0VBREksQ0FiTjtFQWdCQSxDQUFBLEVBQUcsU0FBQTtJQUNELElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBVjtJQUNBLElBQUksQ0FBQyxFQUFMLENBQUEsQ0FDRSxDQUFDLFdBREgsQ0FDZSxJQURmLENBRUUsQ0FBQyxRQUZILENBRVksS0FGWjtXQUlBLFVBQUEsQ0FBVyxTQUFBO2FBQ1QsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFWO0lBRFMsQ0FBWCxFQUVFLEdBRkY7RUFOQyxDQWhCSCIsImZpbGUiOiJkYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXG5kYmFyID1cblxuICBjYWNoZTpcbiAgICBlbDogZmFsc2VcblxuICBlbDogLT5cbiAgICBkYmFyLmNhY2hlLmVsID0gJCgnLmRiYXInKSBpZiBkYmFyLmNhY2hlLmVsIGlzIGZhbHNlXG4gICAgcmV0dXJuIGRiYXIuY2FjaGUuZWxcblxuICBpOiAtPlxuICAgIGRiYXIuZWwoKVxuICAgICAgLnJlbW92ZUNsYXNzICdvZmYnXG4gICAgICAuYWRkQ2xhc3MgJ29uJ1xuICAgIGRiYXIucGVyYyAwXG5cbiAgcGVyYzogKHBlcmMpIC0+XG4gICAgZGJhci5lbCgpLmZpbmQoJy5pbm5lciA+IC5mdWxsJykuY3NzKCd3aWR0aCcsIFwiI3twZXJjKjEwMH0lXCIpXG5cbiAgZDogLT5cbiAgICBkYmFyLnBlcmMgMVxuICAgIGRiYXIuZWwoKVxuICAgICAgLnJlbW92ZUNsYXNzICdvbidcbiAgICAgIC5hZGRDbGFzcyAnb2ZmJ1xuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgZGJhci5wZXJjIDBcbiAgICAsIDcwMFxuXG4iXX0=
