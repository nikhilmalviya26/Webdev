function Login() {
    const um = document.getElementById('username').value.trim();
    const ps = document.getElementById('password').value;

    console.log(um,ps);
    
}

// type2

const LoginForm = document.getElementById("loginForm");

LoginForm.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const LoginFormData = new FormData(LoginForm);
    const UN = LoginFormData.get("userName");
    const PS = LoginFormData.get("password");

    console.log(UN,PS);
    
   //short
   LoginForm.forEach((value,key)) => console.log(key,":", value));
   LoginForm.forEach((value,key) => (testFormDataJSON[key] = value));
});