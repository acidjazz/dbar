var Index, ascii;

Index = {
  i: function() {
    var j, len, line, ref, results;
    Index.handlers();
    $('color').each(function(i, e) {
      return $(e).css('color', $(e).data('c'));
    });
    ref = ascii.split("\n");
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      line = ref[j];
      results.push(console.log("%c" + line, 'font-family: "Lucida Console"; font-size: 16px; color: #4d394b'));
    }
    return results;
  },
  handlers: function() {
    return $('.command').on('click', Index.command);
  },
  command: function() {
    var js;
    js = $(this).data('js');
    return eval(js);
  }
};

ascii = ':::::::::::::::::::::::::::::::::::::::::::::::::::\n8      .oPYo. oooooo .pPYo.           8           8\n8          `8 8      8                8           8\n8         oP\' 8pPYo. 8oPYo.    .oPYo. 8oPYo.      8\n8      .oP\'       `8 8\'  `8    Yb..   8    8      8\n8      8\'         .P 8.  .P      \'Yb. 8    8      8\n8      8ooooo `YooP\' `YooP\' 88 `YooP\' 8    8      8\n8ooo ::.......:.....::.....:..::.....:..:::..::ooo8\n.....::::::::::::::::::::::::::::::::::::::::::.....\n::::::::::: kevin olson :: enginner :: 256 :::::::::';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO0FBRUQsUUFBQTtJQUFBLEtBQUssQ0FBQyxRQUFOLENBQUE7SUFFQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFpQixTQUFDLENBQUQsRUFBSSxDQUFKO2FBQ2YsQ0FBQSxDQUFFLENBQUYsQ0FBSSxDQUFDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLENBQUEsQ0FBRSxDQUFGLENBQUksQ0FBQyxJQUFMLENBQVUsR0FBVixDQUFsQjtJQURlLENBQWpCO0FBR0E7QUFBQTtTQUFBLHFDQUFBOzttQkFDRSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUEsR0FBSyxJQUFqQixFQUF5QixnRUFBekI7QUFERjs7RUFQQyxDQUFIO0VBU0EsUUFBQSxFQUFVLFNBQUE7V0FFUixDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsRUFBZCxDQUFpQixPQUFqQixFQUEwQixLQUFLLENBQUMsT0FBaEM7RUFGUSxDQVRWO0VBY0EsT0FBQSxFQUFTLFNBQUE7QUFFUCxRQUFBO0lBQUEsRUFBQSxHQUFLLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsSUFBYjtXQUNMLElBQUEsQ0FBSyxFQUFMO0VBSE8sQ0FkVDs7O0FBcUJGLEtBQUEsR0FBUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlxuSW5kZXggPVxuXG4gIGk6IC0+XG5cbiAgICBJbmRleC5oYW5kbGVycygpXG5cbiAgICAkKCdjb2xvcicpLmVhY2ggIChpLCBlKSAtPlxuICAgICAgJChlKS5jc3MgJ2NvbG9yJywgJChlKS5kYXRhICdjJ1xuXG4gICAgZm9yIGxpbmUgaW4gYXNjaWkuc3BsaXQgXCJcXG5cIlxuICAgICAgY29uc29sZS5sb2cgXCIlYyN7bGluZX1cIiwgJ2ZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCI7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6ICM0ZDM5NGInXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnLmNvbW1hbmQnKS5vbiAnY2xpY2snLCBJbmRleC5jb21tYW5kXG5cblxuICBjb21tYW5kOiAtPlxuXG4gICAganMgPSAkKHRoaXMpLmRhdGEgJ2pzJ1xuICAgIGV2YWwganNcblxuXG5cbmFzY2lpID0gJycnXG46Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbjggICAgICAub1BZby4gb29vb29vIC5wUFlvLiAgICAgICAgICAgOCAgICAgICAgICAgOFxuOCAgICAgICAgICBgOCA4ICAgICAgOCAgICAgICAgICAgICAgICA4ICAgICAgICAgICA4XG44ICAgICAgICAgb1AnIDhwUFlvLiA4b1BZby4gICAgLm9QWW8uIDhvUFlvLiAgICAgIDhcbjggICAgICAub1AnICAgICAgIGA4IDgnICBgOCAgICBZYi4uICAgOCAgICA4ICAgICAgOFxuOCAgICAgIDgnICAgICAgICAgLlAgOC4gIC5QICAgICAgJ1liLiA4ICAgIDggICAgICA4XG44ICAgICAgOG9vb29vIGBZb29QJyBgWW9vUCcgODggYFlvb1AnIDggICAgOCAgICAgIDhcbjhvb28gOjouLi4uLi4uOi4uLi4uOjouLi4uLjouLjo6Li4uLi46Li46OjouLjo6b29vOFxuLi4uLi46Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjouLi4uLlxuOjo6Ojo6Ojo6Ojoga2V2aW4gb2xzb24gOjogZW5naW5uZXIgOjogMjU2IDo6Ojo6Ojo6OlxuJycnXG4iXX0=
