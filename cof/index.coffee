
Index =

  i: ->

    Index.handlers()

    $('color').each  (i, e) ->
      $(e).css 'color', $(e).data 'c'

    for line in ascii.split "\n"
      console.log "%c#{line}", 'font-family: "Lucida Console"; font-size: 16px; color: #4d394b'
  handlers: ->

    $('.command').on 'click', Index.command


  command: ->

    js = $(this).data 'js'
    eval js



ascii = '''
:::::::::::::::::::::::::::::::::::::::::::::::::::
8      .oPYo. oooooo .pPYo.           8           8
8          `8 8      8                8           8
8         oP' 8pPYo. 8oPYo.    .oPYo. 8oPYo.      8
8      .oP'       `8 8'  `8    Yb..   8    8      8
8      8'         .P 8.  .P      'Yb. 8    8      8
8      8ooooo `YooP' `YooP' 88 `YooP' 8    8      8
8ooo ::.......:.....::.....:..::.....:..:::..::ooo8
.....::::::::::::::::::::::::::::::::::::::::::.....
::::::::::: kevin olson :: enginner :: 256 :::::::::
'''
