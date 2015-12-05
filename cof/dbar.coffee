
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
    dbar.i() if perc isnt 1 and perc isnt 0 and dbar.el().hasClass 'off'
    dbar.el().find('.inner > .full').css('width', "#{perc*100}%")

  set: (options) ->

   if options.barColor isnt undefined
     dbar.el().find('.full').css('background-color', options.barColor)
   if options.gradientColor isnt undefined
     dbar.el().css('background-color', options.gradientColor)
     dbar.el().find('.gradient').css('background', "linear-gradient(90deg, #{options.gradientColor}, rgba(255,255,255,1)")

  d: ->
    dbar.perc 1
    dbar.el()
      .removeClass 'on'
      .addClass 'off'

    setTimeout ->
      dbar.perc 0
    , 700

