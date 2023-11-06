window.onload = init;
function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Your order has been sent.");
      document.location.href="payment.html";
      return false;
   }
   
   document.getElementById("delivery").onclick = turnOnDelivery;
   document.getElementById("pickup").onclick=turnOnPickup;
}

function turnOnDelivery() {
   document.getElementById("addressBox").disabled=false;
   document.getElementById("delBox").disabled=false;
   document.getElementById("pickupBox").disabled=true;
}

function turnOnPickup() {
   document.getElementById("addressBox").disabled=true;
   document.getElementById("delBox").disabled=true;
   document.getElementById("pickupBox").disabled=false;
}
   
