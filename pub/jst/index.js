var Index, ascii;

Index = {
  i: function() {
    var i, len, line, ref, results;
    Index.handlers();
    ref = ascii.split("\n");
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      line = ref[i];
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
    console.log(js);
    return eval(js);
  }
};

ascii = ':::::::::::::::::::::::::::::::::::::::::::::::::::\n8      .oPYo. oooooo .pPYo.           8           8\n8          `8 8      8                8           8\n8         oP\' 8pPYo. 8oPYo.    .oPYo. 8oPYo.      8\n8      .oP\'       `8 8\'  `8    Yb..   8    8      8\n8      8\'         .P 8.  .P      \'Yb. 8    8      8\n8      8ooooo `YooP\' `YooP\' 88 `YooP\' 8    8      8\n8ooo ::.......:.....::.....:..::.....:..:::..::ooo8\n.....::::::::::::::::::::::::::::::::::::::::::.....\n::::::::::: kevin olson :: enginner :: 256 :::::::::';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO0FBRUQsUUFBQTtJQUFBLEtBQUssQ0FBQyxRQUFOLENBQUE7QUFFQTtBQUFBO1NBQUEscUNBQUE7O21CQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQSxHQUFLLElBQWpCLEVBQXlCLGdFQUF6QjtBQURGOztFQUpDLENBQUg7RUFNQSxRQUFBLEVBQVUsU0FBQTtXQUVSLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLEtBQUssQ0FBQyxPQUFoQztFQUZRLENBTlY7RUFXQSxPQUFBLEVBQVMsU0FBQTtBQUVQLFFBQUE7SUFBQSxFQUFBLEdBQUssQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFiO0lBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSxFQUFaO1dBQ0EsSUFBQSxDQUFLLEVBQUw7RUFKTyxDQVhUOzs7QUFtQkYsS0FBQSxHQUFRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXG5JbmRleCA9XG5cbiAgaTogLT5cblxuICAgIEluZGV4LmhhbmRsZXJzKClcblxuICAgIGZvciBsaW5lIGluIGFzY2lpLnNwbGl0IFwiXFxuXCJcbiAgICAgIGNvbnNvbGUubG9nIFwiJWMje2xpbmV9XCIsICdmb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiOyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiAjNGQzOTRiJ1xuICBoYW5kbGVyczogLT5cblxuICAgICQoJy5jb21tYW5kJykub24gJ2NsaWNrJywgSW5kZXguY29tbWFuZFxuXG5cbiAgY29tbWFuZDogLT5cblxuICAgIGpzID0gJCh0aGlzKS5kYXRhICdqcydcbiAgICBjb25zb2xlLmxvZyBqc1xuICAgIGV2YWwganNcblxuXG5cbmFzY2lpID0gJycnXG46Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbjggICAgICAub1BZby4gb29vb29vIC5wUFlvLiAgICAgICAgICAgOCAgICAgICAgICAgOFxuOCAgICAgICAgICBgOCA4ICAgICAgOCAgICAgICAgICAgICAgICA4ICAgICAgICAgICA4XG44ICAgICAgICAgb1AnIDhwUFlvLiA4b1BZby4gICAgLm9QWW8uIDhvUFlvLiAgICAgIDhcbjggICAgICAub1AnICAgICAgIGA4IDgnICBgOCAgICBZYi4uICAgOCAgICA4ICAgICAgOFxuOCAgICAgIDgnICAgICAgICAgLlAgOC4gIC5QICAgICAgJ1liLiA4ICAgIDggICAgICA4XG44ICAgICAgOG9vb29vIGBZb29QJyBgWW9vUCcgODggYFlvb1AnIDggICAgOCAgICAgIDhcbjhvb28gOjouLi4uLi4uOi4uLi4uOjouLi4uLjouLjo6Li4uLi46Li46OjouLjo6b29vOFxuLi4uLi46Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjouLi4uLlxuOjo6Ojo6Ojo6Ojoga2V2aW4gb2xzb24gOjogZW5naW5uZXIgOjogMjU2IDo6Ojo6Ojo6OlxuJycnXG4iXX0=
