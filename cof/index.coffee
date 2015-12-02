
Index =

  i: ->

    Index.handlers()

  handlers: ->

    for line in ascii.split "\n"
      console.log "%c#{line}", 'font-family: "Lucida Console"; font-size: 16px; color: #4d394b'

ascii = '''
 ad888888b, 8888888888    ad8888ba,    88 88
d8"     "88 88           8P'    "Y8    88 88
        a8P 88  ____    d8             88 88
     ,d8P"  88a8PPPP8b, 88,dd888bb,    88 88  ,adPPYba,
   a8P"     PP"     `8b 88P'    `8b    88 88 a8"     ""
 a8P'                d8 88       d8    88 88 8b
d8"         Y8a     a8P 88a     a8P    88 88 "8a,   ,aa
88888888888  "Y88888P"   "Y88888P"     88 88  `"Ybbd8"'
'''

ascii = '''

.oPYo. oooooo .pPYo.   8 8
    `8 8      8        8 8
   oP' 8pPYo. 8oPYo.   8 8 .oPYo.
.oP'       `8 8'  `8   8 8 8    '
8'         .P 8.  .P   8 8 8    .
8ooooo `YooP' `YooP'   8 8 `YooP'
.......:.....::.....:::....:.....:
::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::
'''

ascii = '''
     d8'      d8' d8888b. 888888P .d8888P             dP
    d8'      d8'      `88 88'     88'                 88
   d8'      d8'   .aaadP' 88baaa. 88baaa.    .d8888b. 88d888b.
  d8'      d8'    88'         `88 88` `88    Y8ooooo. 88'  `88
 d8'      d8'     88.          88 8b. .d8 dP       88 88    88
88       88       Y88888P d88888P `Y888P' 88 `88888P' dP    dP
'''

ascii = '''
oooo                                           oooo
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
