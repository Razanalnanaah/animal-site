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


var showOrder = function() {
  // input
  var order = prompt('how often animals eat in the day? "cat" or "dog"?');
  var pictures = ''; 
  var total = NaN;

  // processing
  while (order !== 'cat' && order !== 'dog') {
    order = prompt('Please enter "cat" or "dog"...');
  }

  while(isNaN(total)) {
    total = prompt('How many would you like?');
  }
  
  for(var models = 0; models < total; models = models + 1) {
    if (order === 'cat') {
      pictures = pictures + '<p><img src="https://images.theconversation.com/files/250711/original/file-20181214-185258-1czwsab.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"></p>'
    } else if (order === 'dog') {
      pictures = pictures + '<p><img src="https://timesofindia.indiatimes.com/thumb/msid-60132235,imgsize-169468,width-800,height-600,resizemode-4/60132235.jpg"></p>'
    }
  }

  // output
  return pictures;
}
