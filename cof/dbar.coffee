
dbar =

  cache:
    el: false

  el: ->
    dbar.cache.el = $('.dbar') if dbar.cache.el is false
    return dbar.cache.el

  i: ->
    dbar.el()
      .removeClass 'off'
      .addClass 'on'
    dbar.perc 0

  perc: (perc) ->
    dbar.el().find('.inner > .full').css('width', "#{perc*100}%")

  d: ->
    dbar.perc 1
    dbar.el()
      .removeClass 'on'
      .addClass 'off'
