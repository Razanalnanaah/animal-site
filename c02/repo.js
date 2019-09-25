'use strict'
function createGreeting() {
  // input
  
  var num ;
  var greeting;
  var num = prompt('How mush animals in your house?');

  // processing:
  if (num > 9) {
    greeting = 'So much!';
  } else if (num >= 4) {
    greeting = 'Great!';
  } else if (num >= 0) {
    greeting = 'perfect!';
  } else {
    greeting = 'Why!';
  }

  //output:
  return greeting;
}

var showtype = function() {
  // input
  var type = prompt('What would you like to buy?');
  var picture; 

  while (type !== 'dog' && type !== 'cat' )
    type = prompt('please try cat or dog');

  // processing
  if (type === 'cat') {
    picture = '<img src=https://www.argospetinsurance.co.uk/assets/uploads/2017/10/pexels-photo-416160.jpeg">'
  } else if (type === 'dog') {
    picture = '<img src=https://i2-prod.mirror.co.uk/incoming/article14984121.ece/ALTERNATES/s1200/3_The-dog-looks-at-the-camera.jpg">'
  }

  // output
  return picture;
}
