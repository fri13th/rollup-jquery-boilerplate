(function ($) {
  'use strict';

  $ = 'default' in $ ? $['default'] : $;

  function view(who, array) {
    return ("\nHello, " + who + "!\n" + (array.map(function (no) { return ("" + no); }).join('')) + "\n");
  }

  // This function gets included
  function cube ( x ) {
    return x * x * x;
  }

  var array = [1, 2, 3];

  console.log(cube(3));
  $(function () { return console.log(view('World', array)); });

}(jQuery));
//# sourceMappingURL=app.js.map