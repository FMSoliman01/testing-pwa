const signUpButton = document.getElementById('signUp');
const loginButton = document.getElementById('login');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});




function register() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value

    var nameF = document.getElementById('name')
    var emailF = document.getElementById('email')
    var passwordF = document.getElementById('pass')

    if (name.length >= 8 && email.indexOf("@") !== -1 && password.length >= 8) {
       
        nameF.style.border = ""; 
        emailF.style.border = ""; 
        passwordF.style.border = ""; 
    
        
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        function savePassword(password) {
            localStorage.setItem('Password');
        }

        savePassword(password)


    } else {
        
        if (name.length < 8) {
            nameF.style.border = "1px solid red"; 
        } else {
            nameF.style.border = ""; 
        }
    
        if (email.indexOf("@") === -1) {
            emailF.style.border = "1px solid red"; 
        } else {
            emailF.style.border = ""; 
        }
    
        if (password.length < 8) {
            passwordF.style.border = "1px solid red"; 
        } else {
            passwordF.style.border = ""; 
        }
    }
    


}


function login() {
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value

    var emailf = document.getElementById('email')
    var passwordf = document.getElementById('pass')


    if (localStorage.getItem('email') == email && localStorage.getItem('password') == password) {
        window.location.href = 'ha.html'
        alert("Login Successful");
    } else {
        var E = document.getElementById("error");
        E.innerHTML = "wrong email or password";
    }

   
}

