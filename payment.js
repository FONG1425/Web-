window.onload = init;
function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("You have successfully made your payment.");
      document.location.href="coffee_shop.html";
      return false;
   }
   
   document.getElementById("credit").onclick =turnOnCreditCard;
   document.getElementById("cash").onclick=turnOnCashOnDelivery;
}

function turnOnCreditCard() {
   document.getElementById("cname").disabled=false;
   document.getElementById("ccnum").disabled=false;
   document.getElementById("expmonth").disabled=false;
   document.getElementById("expyear").disabled=false;
   document.getElementById("ccv").disabled=false;
}

function turnOnCashOnDelivery() {
    document.getElementById("cname").disabled=true;
    document.getElementById("ccnum").disabled=true;
    document.getElementById("expmonth").disabled=true;
    document.getElementById("expyear").disabled=true;
    document.getElementById("ccv").disabled=true;
}