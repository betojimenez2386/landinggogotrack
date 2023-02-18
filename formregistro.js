const login_button = document.getElementById("login");

// Formulario de Login
const email_login_input = document.querySelector("#email_login");
const pass_login_input = document.querySelector("#pass_login")


document.addEventListener("DOMContentLoaded", () => {
 login_button.addEventListener("click", (e) => {
        e.preventDefault();

        const users = JSON.parse( localStorage.getItem("users") ) || [];

        const user = users.find( x => x.email === email_login_input.value );

        if (user) {
            console.log(user)
            if(user.pass === pass_login_input.value){
                alert("Bienvenido");
            }else{
                alert("Verifica tus datos")
            } 
        }
            else {
                alert("No Existe el correo")
            }



    })

})