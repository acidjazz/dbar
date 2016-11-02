var Index, ascii;

Index = {
  i: function() {
    Index.handlers();
    $('color').each(function(i, e) {
      return $(e).css('color', $(e).data('c'));
    });
    console.log("%c256.sh", 'font-family: "Verdana"; font-size: 16px; color: #4d394b');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO0lBRUQsS0FBSyxDQUFDLFFBQU4sQ0FBQTtJQUVBLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxJQUFYLENBQWlCLFNBQUMsQ0FBRCxFQUFJLENBQUo7YUFDZixDQUFBLENBQUUsQ0FBRixDQUFJLENBQUMsR0FBTCxDQUFTLE9BQVQsRUFBa0IsQ0FBQSxDQUFFLENBQUYsQ0FBSSxDQUFDLElBQUwsQ0FBVSxHQUFWLENBQWxCO0lBRGUsQ0FBakI7SUFJQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVosRUFBd0IseURBQXhCO0lBRUEsSUFBSSxDQUFDLENBQUwsQ0FBQTtJQUNBLFVBQUEsQ0FBVyxTQUFBO2FBQ1QsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFWO0lBRFMsQ0FBWCxFQUVFLElBRkY7SUFHQSxVQUFBLENBQVcsU0FBQTthQUNULElBQUksQ0FBQyxJQUFMLENBQVUsR0FBVjtJQURTLENBQVgsRUFFRSxJQUZGO0lBR0EsVUFBQSxDQUFXLFNBQUE7YUFDVCxJQUFJLENBQUMsSUFBTCxDQUFVLElBQVY7SUFEUyxDQUFYLEVBRUUsSUFGRjtXQUdBLFVBQUEsQ0FBVyxTQUFBO01BQ1QsSUFBSSxDQUFDLENBQUwsQ0FBQTthQUNBLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxXQUFYLENBQXVCLEtBQXZCLENBQTZCLENBQUMsUUFBOUIsQ0FBdUMsSUFBdkM7SUFGUyxDQUFYLEVBR0UsSUFIRjtFQXBCQyxDQUFIO0VBeUJBLFFBQUEsRUFBVSxTQUFBO1dBRVIsQ0FBQSxDQUFFLFVBQUYsQ0FBYSxDQUFDLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsS0FBSyxDQUFDLE9BQWhDO0VBRlEsQ0F6QlY7RUE4QkEsT0FBQSxFQUFTLFNBQUE7QUFFUCxRQUFBO0lBQUEsRUFBQSxHQUFLLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsSUFBYjtXQUNMLElBQUEsQ0FBSyxFQUFMO0VBSE8sQ0E5QlQ7OztBQW1DRixLQUFBLEdBQVEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJcbkluZGV4ID1cblxuICBpOiAtPlxuXG4gICAgSW5kZXguaGFuZGxlcnMoKVxuXG4gICAgJCgnY29sb3InKS5lYWNoICAoaSwgZSkgLT5cbiAgICAgICQoZSkuY3NzICdjb2xvcicsICQoZSkuZGF0YSAnYydcblxuICAgICNmb3IgbGluZSBpbiBhc2NpaS5zcGxpdCBcIlxcblwiXG4gICAgY29uc29sZS5sb2cgXCIlYzI1Ni5zaFwiLCAnZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiOyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiAjNGQzOTRiJ1xuXG4gICAgZGJhci5pKClcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBkYmFyLnBlcmMgMC4yNVxuICAgICwgMTAwMFxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIGRiYXIucGVyYyAwLjVcbiAgICAsIDEyMDBcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBkYmFyLnBlcmMgMC43NVxuICAgICwgMTQwMFxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIGRiYXIuZCgpXG4gICAgICAkKCcubWFpbicpLnJlbW92ZUNsYXNzKCdvZmYnKS5hZGRDbGFzcygnb24nKVxuICAgICwgMTcwMFxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnLmNvbW1hbmQnKS5vbiAnY2xpY2snLCBJbmRleC5jb21tYW5kXG5cblxuICBjb21tYW5kOiAtPlxuXG4gICAganMgPSAkKHRoaXMpLmRhdGEgJ2pzJ1xuICAgIGV2YWwganNcblxuYXNjaWkgPSAnJydcbjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuOCAgICAgIC5vUFlvLiBvb29vb28gLnBQWW8uICAgICAgICAgICA4ICAgICAgICAgICA4XG44ICAgICAgICAgIGA4IDggICAgICA4ICAgICAgICAgICAgICAgIDggICAgICAgICAgIDhcbjggICAgICAgICBvUCcgOHBQWW8uIDhvUFlvLiAgICAub1BZby4gOG9QWW8uICAgICAgOFxuOCAgICAgIC5vUCcgICAgICAgYDggOCcgIGA4ICAgIFliLi4gICA4ICAgIDggICAgICA4XG44ICAgICAgOCcgICAgICAgICAuUCA4LiAgLlAgICAgICAnWWIuIDggICAgOCAgICAgIDhcbjggICAgICA4b29vb28gYFlvb1AnIGBZb29QJyA4OCBgWW9vUCcgOCAgICA4ICAgICAgOFxuOG9vbyA6Oi4uLi4uLi46Li4uLi46Oi4uLi4uOi4uOjouLi4uLjouLjo6Oi4uOjpvb284XG4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uXG46Ojo6Ojo6Ojo6OiBrZXZpbiBvbHNvbiA6OiBlbmdpbm5lciA6OiAyNTYgOjo6Ojo6Ojo6XG4nJydcbiJdfQ==
