/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);

/*form*/

var selected = document.querySelector(".selected");
var optionsContainer = document.querySelector(".options-container");

var optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});


var se = document.querySelector(".selected2");
var oc = document.querySelector(".options-container2");

var ol = document.querySelectorAll(".option2");

se.addEventListener("click", () => {
  oc.classList.toggle("active2");
});

ol.forEach(o => {
  o.addEventListener("click", () => {
    se.innerHTML = o.querySelector("label2").innerHTML;
    oc.classList.remove("active2");
  });
});
