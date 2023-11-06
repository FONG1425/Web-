window.onload = init;
function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("You have signed up as a member.");
      return false;
   }
}