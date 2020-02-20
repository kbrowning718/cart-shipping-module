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
fsMessage.innerHTML = "<span class='strong'>2nd Day Air:</span> Free Shipping not applicable with expedited shipping methods."
  details.classList.remove('hide');
  details.classList.add('show');
})

nDayAir.addEventListener("click", function (e) {
fsMessage.innerHTML = "<span class='strong'>Next Day Air:</span> Free Shipping not applicable with expedited shipping methods."
  details.classList.remove('hide');
    details.classList.add('show');
})

standardShipping.addEventListener("click", function(e) {
  fsMessage.innerHTML = "<span id='fs-label' class='strong'>Standard Ground:</span> Only <span id='fs-price' class='fs-price'>$126.00</span> until free shipping."
  details.classList.remove('show');
  details.classList.add('hide');
})
