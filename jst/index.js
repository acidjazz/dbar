var Index, ascii;

Index = {
  i: function() {
    var j, len, line, ref;
    Index.handlers();
    $('color').each(function(i, e) {
      return $(e).css('color', $(e).data('c'));
    });
    ref = ascii.split("\n");
    for (j = 0, len = ref.length; j < len; j++) {
      line = ref[j];
      console.log("%c" + line, 'font-family: "Lucida Console"; font-size: 16px; color: #4d394b');
    }
    dbar.i();
    setTimeout(function() {
      return dbar.perc(0.25);
    }, 1000);
    setTimeout(function() {
      return dbar.perc(0.5);
    }, 1200);
    setTimeout(function() {
      return dbar.perc(0.75);
    }, 1400);
    return setTimeout(function() {
      dbar.d();
      return $('.main').removeClass('off').addClass('on');
    }, 1700);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO0FBRUQsUUFBQTtJQUFBLEtBQUssQ0FBQyxRQUFOLENBQUE7SUFFQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFpQixTQUFDLENBQUQsRUFBSSxDQUFKO2FBQ2YsQ0FBQSxDQUFFLENBQUYsQ0FBSSxDQUFDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLENBQUEsQ0FBRSxDQUFGLENBQUksQ0FBQyxJQUFMLENBQVUsR0FBVixDQUFsQjtJQURlLENBQWpCO0FBR0E7QUFBQSxTQUFBLHFDQUFBOztNQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQSxHQUFLLElBQWpCLEVBQXlCLGdFQUF6QjtBQURGO0lBR0EsSUFBSSxDQUFDLENBQUwsQ0FBQTtJQUNBLFVBQUEsQ0FBVyxTQUFBO2FBQ1QsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFWO0lBRFMsQ0FBWCxFQUVFLElBRkY7SUFHQSxVQUFBLENBQVcsU0FBQTthQUNULElBQUksQ0FBQyxJQUFMLENBQVUsR0FBVjtJQURTLENBQVgsRUFFRSxJQUZGO0lBR0EsVUFBQSxDQUFXLFNBQUE7YUFDVCxJQUFJLENBQUMsSUFBTCxDQUFVLElBQVY7SUFEUyxDQUFYLEVBRUUsSUFGRjtXQUdBLFVBQUEsQ0FBVyxTQUFBO01BQ1QsSUFBSSxDQUFDLENBQUwsQ0FBQTthQUNBLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxXQUFYLENBQXVCLEtBQXZCLENBQTZCLENBQUMsUUFBOUIsQ0FBdUMsSUFBdkM7SUFGUyxDQUFYLEVBR0UsSUFIRjtFQXBCQyxDQUFIO0VBeUJBLFFBQUEsRUFBVSxTQUFBO1dBRVIsQ0FBQSxDQUFFLFVBQUYsQ0FBYSxDQUFDLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsS0FBSyxDQUFDLE9BQWhDO0VBRlEsQ0F6QlY7RUE4QkEsT0FBQSxFQUFTLFNBQUE7QUFFUCxRQUFBO0lBQUEsRUFBQSxHQUFLLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsSUFBYjtXQUNMLElBQUEsQ0FBSyxFQUFMO0VBSE8sQ0E5QlQ7OztBQXFDRixLQUFBLEdBQVEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJcbkluZGV4ID1cblxuICBpOiAtPlxuXG4gICAgSW5kZXguaGFuZGxlcnMoKVxuXG4gICAgJCgnY29sb3InKS5lYWNoICAoaSwgZSkgLT5cbiAgICAgICQoZSkuY3NzICdjb2xvcicsICQoZSkuZGF0YSAnYydcblxuICAgIGZvciBsaW5lIGluIGFzY2lpLnNwbGl0IFwiXFxuXCJcbiAgICAgIGNvbnNvbGUubG9nIFwiJWMje2xpbmV9XCIsICdmb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiOyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiAjNGQzOTRiJ1xuXG4gICAgZGJhci5pKClcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBkYmFyLnBlcmMgMC4yNVxuICAgICwgMTAwMFxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIGRiYXIucGVyYyAwLjVcbiAgICAsIDEyMDBcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBkYmFyLnBlcmMgMC43NVxuICAgICwgMTQwMFxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIGRiYXIuZCgpXG4gICAgICAkKCcubWFpbicpLnJlbW92ZUNsYXNzKCdvZmYnKS5hZGRDbGFzcygnb24nKVxuICAgICwgMTcwMFxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnLmNvbW1hbmQnKS5vbiAnY2xpY2snLCBJbmRleC5jb21tYW5kXG5cblxuICBjb21tYW5kOiAtPlxuXG4gICAganMgPSAkKHRoaXMpLmRhdGEgJ2pzJ1xuICAgIGV2YWwganNcblxuXG5cbmFzY2lpID0gJycnXG46Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbjggICAgICAub1BZby4gb29vb29vIC5wUFlvLiAgICAgICAgICAgOCAgICAgICAgICAgOFxuOCAgICAgICAgICBgOCA4ICAgICAgOCAgICAgICAgICAgICAgICA4ICAgICAgICAgICA4XG44ICAgICAgICAgb1AnIDhwUFlvLiA4b1BZby4gICAgLm9QWW8uIDhvUFlvLiAgICAgIDhcbjggICAgICAub1AnICAgICAgIGA4IDgnICBgOCAgICBZYi4uICAgOCAgICA4ICAgICAgOFxuOCAgICAgIDgnICAgICAgICAgLlAgOC4gIC5QICAgICAgJ1liLiA4ICAgIDggICAgICA4XG44ICAgICAgOG9vb29vIGBZb29QJyBgWW9vUCcgODggYFlvb1AnIDggICAgOCAgICAgIDhcbjhvb28gOjouLi4uLi4uOi4uLi4uOjouLi4uLjouLjo6Li4uLi46Li46OjouLjo6b29vOFxuLi4uLi46Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjouLi4uLlxuOjo6Ojo6Ojo6Ojoga2V2aW4gb2xzb24gOjogZW5naW5uZXIgOjogMjU2IDo6Ojo6Ojo6OlxuJycnXG4iXX0=
