var shippingMethods = document.getElementsByClassName("shipping-method-container");


for (var i = 0; i < shippingMethods.length; i++) {

  shippingMethods[i].addEventListener("click", function(e) {

    var notClickedShipping = document.getElementsByClassName("shipping-method-container");
    var freeShipping = document.getElementById("free-shipping");

    for (var j = 0; j < notClickedShipping.length; j++) {
      if (notClickedShipping[j].classList.contains("clicked")) {
        notClickedShipping[j].classList.remove("clicked");
      }
    }
    var clickedShipping = e.target;
    if (clickedShipping.classList.contains("shipping-method-container")) {
      clickedShipping.classList.add("clicked");
    } else if (clickedShipping.classList.contains("shipping-method-label")) {
      clickedShipping.parentElement.classList.toggle("clicked");
    }
  });
}


var standardShipping = document.getElementById('standard-ground');
var sDayAir = document.getElementById('second-day-air');
var nDayAir = document.getElementById('next-day-air');
var fsMessage = document.getElementById('fs-message');
var details = document.getElementById('fs-details')



sDayAir.addEventListener("click", function (e) {
fsMessage.innerHTML = "<span class='strong'>2nd Day Air:</span> Orders of $xx.xx or more are eligible for flat rates on expedited shipping methods."
  details.classList.remove('hide');
  details.classList.add('show');
})

nDayAir.addEventListener("click", function (e) {
fsMessage.innerHTML = "<span class='strong'>Next Day Air:</span> Orders of $xx.xx or more are eligible for flat rates on expedited shipping methods."
  details.classList.remove('hide');
    details.classList.add('show');
})

standardShipping.addEventListener("click", function(e) {
  fsMessage.innerHTML = "<span id='fs-label' class='strong'>Standard Ground:</span> Only <span id='fs-price' class='fs-price'>$126.00</span> until free shipping."
  details.classList.remove('show');
  details.classList.add('hide');
});

var questionToolTip = document.getElementById('question-tool');
var overlay = document.getElementById('overlay');
var shipToolTip = document.getElementById('tooltip-container');

questionToolTip.addEventListener("click", function (e) {
  overlay.style.display = "block";
  shipToolTip.classList.remove('top-0');
});

var responseContainer = document.getElementById('response-container');
var closeIcons = document.getElementsByClassName('fa-times');

for(var i=0; i<closeIcons.length; i++) {
  closeIcons[i].addEventListener('click', function(e) {
    shipToolTip.classList.add("top-0");
    overlay.style.display = "none";
    responseContainer.innerHTML = "";

var notActive = document.getElementsByClassName('feedback-container');
for (var k = 0; k < notActive.length; k++) {
      if(notActive[k].classList.contains('clicked-feedback')) {
        notActive[k].classList.remove('clicked-feedback');
      }
    }
  });

var feedbackButton = document.getElementsByClassName('feedback-button');

for (var j = 0; j < feedbackButton.length; j++) {
  feedbackButton[j].addEventListener('click', function (e) {
    responseContainer.innerHTML = "<p>Thank you for your feedback.<p>";


  clickedButton = e.target;
if(clickedButton.classList.contains('feedback-button')) {

    clickedButton.classList.add("clicked-feedback");
  } else if(clickedButton.classList.contains('feedback-label')) {
    clickedButton.parentElement.classList.add('clicked-feedback');
  }
  });
}
}
