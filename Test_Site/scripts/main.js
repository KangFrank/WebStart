/*This code is Frabk's first .js code and just for test*/
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Frank-test world!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpg') {
      myImage.setAttribute('src', 'images/dog.jpg');
    } else {
      myImage.setAttribute('src', 'images/cat.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}