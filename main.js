function menu(){
var x = document.getElementById("mi")
x.style.display = "block"
var y = document.getElementById("mo")
y.style.display ="none"
var z = document.getElementById("mc")
z.style.display ="block"
}
function menuc() {

var x = document.getElementById("mi")
x.style.display = "none"
var y = document.getElementById("mo")
y.style.display ="block"
var z = document.getElementById("mc")
z.style.display ="none"
}

var words = [
  'Hi, I\'m a Web Developer',
  'Designer',
  'Innovator',
  'Tutor',
  'I preach Possibility Thinking',
  'I\'m an AI Enthusiast'
];
var part;
var i = 0;
var offset = 0;
var len = words.length;
var forwards = true;
var skip_count = 0;
var skip_delay = 15;
var speed = 70;

var wordflick = function() {
  setInterval(function() {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector('.word').textContent = part;
  }, speed);
};

window.addEventListener('DOMContentLoaded', function() {
  wordflick();
});
