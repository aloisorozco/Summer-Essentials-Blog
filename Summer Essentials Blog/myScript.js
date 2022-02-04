var emails = [];
var count = 0;

var email = document.getElementById('email');

function saveEmailToNewsletter() {
    emails[count]=email;
    window.alert("You successfully subscribed to our newsletter!");
    count++;
    
}