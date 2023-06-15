let background = document.getElementById('background');
let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3');
let layer4 = document.getElementById('layer4');
let title = document.getElementsByClassName('text');
let sec = document.getElementById('sec');


window.addEventListener('scroll', function(){
  let value = window.scrollY;
  value = Math.min(3800, Math.max(0, value));
  background.style.top = value * 0.85 + 'px';
  layer1.style.top = 300  + value * 0 + 'px';
  layer2.style.top = 300 + value * 0.2 + 'px';
  layer3.style.top = 300 + value * 0.35 + 'px';
  layer4.style.top = 300 + value * 0.55 + 'px';
  for (var i = 0; i < title.length; i++) {
    title[i].style.top =  100 + value * 1.1 + 'px';
  }
});

function updateSecPosition() {
  const layer1Bottom = layer1.offsetTop + layer1.offsetHeight;
  sec.style.top = layer1Bottom + 'px';
}

window.addEventListener('resize', function() {
  updateSecPosition();
});

// Initial call to updateSecPosition on page load
updateSecPosition();