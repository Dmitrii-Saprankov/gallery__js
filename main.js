var displayedImage = document.querySelector('.main-img');
var thumbBar = document.querySelector('.mini-img');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

let arr = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']
for (let i = 0; i < arr.length; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', arr[i]);
  thumbBar.appendChild(newImage);

  newImage.onclick = function () {
    displayedImage.setAttribute('src', arr[i]);
  }
}

btn.onclick = function () {
  let theme = btn.getAttribute('class');

  if (theme === 'darkness') {
    btn.setAttribute('class', 'ligthness');
    btn.textContent = 'Светлее';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'darkness');
    btn.textContent = 'Темнее';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}