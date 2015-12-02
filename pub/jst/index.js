var Index, ascii;

Index = {
  i: function() {
    return Index.handlers();
  },
  handlers: function() {
    var i, len, line, ref, results;
    ref = ascii.split("\n");
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      line = ref[i];
      results.push(console.log("%c" + line, 'font-family: "Lucida Console"; font-size: 16px; color: #4d394b'));
    }
    return results;
  }
};

ascii = 'ad888888b, 8888888888    ad8888ba,    88 88\nd8"     "88 88           8P\'    "Y8    88 88\n       a8P 88  ____    d8             88 88\n    ,d8P"  88a8PPPP8b, 88,dd888bb,    88 88  ,adPPYba,\n  a8P"     PP"     `8b 88P\'    `8b    88 88 a8"     ""\na8P\'                d8 88       d8    88 88 8b\nd8"         Y8a     a8P 88a     a8P    88 88 "8a,   ,aa\n88888888888  "Y88888P"   "Y88888P"     88 88  `"Ybbd8"\'';

ascii = '\n.oPYo. oooooo .pPYo.   8 8\n    `8 8      8        8 8\n   oP\' 8pPYo. 8oPYo.   8 8 .oPYo.\n.oP\'       `8 8\'  `8   8 8 8    \'\n8\'         .P 8.  .P   8 8 8    .\n8ooooo `YooP\' `YooP\'   8 8 `YooP\'\n.......:.....::.....:::....:.....:\n::::::::::::::::::::::::::::::::::\n::::::::::::::::::::::::::::::::::';

ascii = '    d8\'      d8\' d8888b. 888888P .d8888P             dP\n   d8\'      d8\'      `88 88\'     88\'                 88\n  d8\'      d8\'   .aaadP\' 88baaa. 88baaa.    .d8888b. 88d888b.\n d8\'      d8\'    88\'         `88 88` `88    Y8ooooo. 88\'  `88\nd8\'      d8\'     88.          88 8b. .d8 dP       88 88    88\n88       88       Y88888P d88888P `Y888P\' 88 `88888P\' dP    dP';

ascii = 'oooo                                           oooo\n8      .oPYo. oooooo .pPYo.           8           8\n8          `8 8      8                8           8\n8         oP\' 8pPYo. 8oPYo.    .oPYo. 8oPYo.      8\n8      .oP\'       `8 8\'  `8    Yb..   8    8      8\n8      8\'         .P 8.  .P      \'Yb. 8    8      8\n8      8ooooo `YooP\' `YooP\' 88 `YooP\' 8    8      8\n8ooo ::.......:.....::.....:..::.....:..:::..::ooo8\n.....::::::::::::::::::::::::::::::::::::::::::.....\n::::::::::: kevin olson :: enginner :: 256 :::::::::';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBRUQsS0FBSyxDQUFDLFFBQU4sQ0FBQTtFQUZDLENBQUg7RUFJQSxRQUFBLEVBQVUsU0FBQTtBQUVSLFFBQUE7QUFBQTtBQUFBO1NBQUEscUNBQUE7O21CQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQSxHQUFLLElBQWpCLEVBQXlCLGdFQUF6QjtBQURGOztFQUZRLENBSlY7OztBQVNGLEtBQUEsR0FBUTs7QUFXUixLQUFBLEdBQVE7O0FBYVIsS0FBQSxHQUFROztBQVNSLEtBQUEsR0FBUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlxuSW5kZXggPVxuXG4gIGk6IC0+XG5cbiAgICBJbmRleC5oYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICBmb3IgbGluZSBpbiBhc2NpaS5zcGxpdCBcIlxcblwiXG4gICAgICBjb25zb2xlLmxvZyBcIiVjI3tsaW5lfVwiLCAnZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIjsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzRkMzk0YidcblxuYXNjaWkgPSAnJydcbiBhZDg4ODg4OGIsIDg4ODg4ODg4ODggICAgYWQ4ODg4YmEsICAgIDg4IDg4XG5kOFwiICAgICBcIjg4IDg4ICAgICAgICAgICA4UCcgICAgXCJZOCAgICA4OCA4OFxuICAgICAgICBhOFAgODggIF9fX18gICAgZDggICAgICAgICAgICAgODggODhcbiAgICAgLGQ4UFwiICA4OGE4UFBQUDhiLCA4OCxkZDg4OGJiLCAgICA4OCA4OCAgLGFkUFBZYmEsXG4gICBhOFBcIiAgICAgUFBcIiAgICAgYDhiIDg4UCcgICAgYDhiICAgIDg4IDg4IGE4XCIgICAgIFwiXCJcbiBhOFAnICAgICAgICAgICAgICAgIGQ4IDg4ICAgICAgIGQ4ICAgIDg4IDg4IDhiXG5kOFwiICAgICAgICAgWThhICAgICBhOFAgODhhICAgICBhOFAgICAgODggODggXCI4YSwgICAsYWFcbjg4ODg4ODg4ODg4ICBcIlk4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICAgICA4OCA4OCAgYFwiWWJiZDhcIidcbicnJ1xuXG5hc2NpaSA9ICcnJ1xuXG4ub1BZby4gb29vb29vIC5wUFlvLiAgIDggOFxuICAgIGA4IDggICAgICA4ICAgICAgICA4IDhcbiAgIG9QJyA4cFBZby4gOG9QWW8uICAgOCA4IC5vUFlvLlxuLm9QJyAgICAgICBgOCA4JyAgYDggICA4IDggOCAgICAnXG44JyAgICAgICAgIC5QIDguICAuUCAgIDggOCA4ICAgIC5cbjhvb29vbyBgWW9vUCcgYFlvb1AnICAgOCA4IGBZb29QJ1xuLi4uLi4uLjouLi4uLjo6Li4uLi46OjouLi4uOi4uLi4uOlxuOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuJycnXG5cbmFzY2lpID0gJycnXG4gICAgIGQ4JyAgICAgIGQ4JyBkODg4OGIuIDg4ODg4OFAgLmQ4ODg4UCAgICAgICAgICAgICBkUFxuICAgIGQ4JyAgICAgIGQ4JyAgICAgIGA4OCA4OCcgICAgIDg4JyAgICAgICAgICAgICAgICAgODhcbiAgIGQ4JyAgICAgIGQ4JyAgIC5hYWFkUCcgODhiYWFhLiA4OGJhYWEuICAgIC5kODg4OGIuIDg4ZDg4OGIuXG4gIGQ4JyAgICAgIGQ4JyAgICA4OCcgICAgICAgICBgODggODhgIGA4OCAgICBZOG9vb29vLiA4OCcgIGA4OFxuIGQ4JyAgICAgIGQ4JyAgICAgODguICAgICAgICAgIDg4IDhiLiAuZDggZFAgICAgICAgODggODggICAgODhcbjg4ICAgICAgIDg4ICAgICAgIFk4ODg4OFAgZDg4ODg4UCBgWTg4OFAnIDg4IGA4ODg4OFAnIGRQICAgIGRQXG4nJydcblxuYXNjaWkgPSAnJydcbm9vb28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb29vb1xuOCAgICAgIC5vUFlvLiBvb29vb28gLnBQWW8uICAgICAgICAgICA4ICAgICAgICAgICA4XG44ICAgICAgICAgIGA4IDggICAgICA4ICAgICAgICAgICAgICAgIDggICAgICAgICAgIDhcbjggICAgICAgICBvUCcgOHBQWW8uIDhvUFlvLiAgICAub1BZby4gOG9QWW8uICAgICAgOFxuOCAgICAgIC5vUCcgICAgICAgYDggOCcgIGA4ICAgIFliLi4gICA4ICAgIDggICAgICA4XG44ICAgICAgOCcgICAgICAgICAuUCA4LiAgLlAgICAgICAnWWIuIDggICAgOCAgICAgIDhcbjggICAgICA4b29vb28gYFlvb1AnIGBZb29QJyA4OCBgWW9vUCcgOCAgICA4ICAgICAgOFxuOG9vbyA6Oi4uLi4uLi46Li4uLi46Oi4uLi4uOi4uOjouLi4uLjouLjo6Oi4uOjpvb284XG4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uXG46Ojo6Ojo6Ojo6OiBrZXZpbiBvbHNvbiA6OiBlbmdpbm5lciA6OiAyNTYgOjo6Ojo6Ojo6XG4nJydcbiJdfQ==
