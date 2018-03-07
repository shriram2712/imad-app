console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img= document.getElementById('madi');
var marginLeft= 0;
function moveRight() {
    marginLeft =marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,1,50);
};

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //cAPTURE THE RESPONSE AND STORE IT IN A VARIABLE
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200)
            {
                alert('logged in successfully');
            } else if (request.status === 403)
            {
                alert('Username/Password incorrect');
            } else (request.status === 500)
            {
                alert('Something went wrong on the server');
            }
        }
    };
    
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    
    request.open('POST', 'http://u2015shriramrajaraman.imad.hasura-app.io/submit-name?name=' + name, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
    
};
    
