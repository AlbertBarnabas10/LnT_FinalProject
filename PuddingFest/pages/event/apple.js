const form = document.getElementById('form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let = isValid = true;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const event = document.getElementById('event');
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

    if(username.value.length < 4 ){
        isValid = false;
    }

    if(email.value.match(regex) !== true) {
        isValid = false;
    }

    if(phone.value.length > 14 && phone.value.match(phoneRegex)){
        isValid = false;
    }

    if(event.value !== "Apple"){
        isValid = false;
    }

    if(isValid !== true){
        alert('Invalid Data');
    }else{
        alert('Thanks For Registering');
    }
})