//
const register_button = document.getElementById("register");
const login_button = document.getElementById("login");

//add dentro de local 
const name_input = document.querySelector("#name")
const email_input = document.querySelector("#email")
const phone_input = document.querySelector("#phone")
const password_input = document.querySelector("#pass")

const name_input_update = document.querySelector("#name_update");
const email_input_update = document.querySelector("#email_update");
const phone_input_update = document.querySelector("#phone_update");
const pass_input_update = document.querySelector("#pass_update");

const form_registro = document.querySelector("#registro1");

let index_update = 0;



document.addEventListener("DOMContentLoaded", () => {
    console.log("probando")
    getUsers()
    register_button.addEventListener("click", (e) => {
        e.preventDefault();
        //add dentro de local 
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const newUsers = {
            //key :  value
            "name": name_input.value,
            "email": email_input.value,
            "phone": phone_input.value,
            "pass": password_input.value
        }

        users.push(newUsers);

        localStorage.setItem("users",JSON.stringify(users));

        getUsers()
        
    })
});

    function deleteUser(index) {
        const users = JSON.parse( localStorage.getItem("users") ) || [];
        users.splice(index, 1);
    
        localStorage.setItem('users', JSON.stringify(users));
        getUsers();
    } 

    function userUpdate() {
        const newUser = {
            // key  :   Value
            "name"  :   name_input_update.value,
            "email" :   email_input_update.value,
            "phone" :   phone_input_update.value,
            "pass"  :   pass_input_update.value
        }
    
        const users = JSON.parse( localStorage.getItem("users") ) || [];
        users.splice(index_update, 1, newUser);
    
        localStorage.setItem('users', JSON.stringify(users));
    
        getUsers()
    
        const form_update = document.getElementById("update1");
    
        form_update.style.display = "none";
        form_registro.style.display = "block"
        
    
    }

    function formUpdate(index) {
        index_update = index;
    
        const users = JSON.parse( localStorage.getItem("users") ) || [];
        const user = users[index];
    
        name_input_update.value = user.name;
        email_input_update.value = user.email;
        phone_input_update.value = user.phone;
        pass_input_update.value = user.pass;
    
        const form_update = document.getElementById("update1");
    
        form_update.style.display = "block";
        form_registro.style.display = "none"
       
    }

    function getUsers() {
    
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const content = document.querySelector("#content-table");
        content.innerHTML=""
        for( let index = 0; index < users.length; index++) {
            console.log(index)
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${users[index].name} </td>
                <td>${users[index].email} </td>
                <td>${users[index].phone} </td>
                <td>
                <button onclick="deleteUser(${index})" type="button">Eliminar</button>
                <button onclick="formUpdate(${index})" type="button">Actualizar</button>
                </td>
            `

            content.append(row)
        }
        
    }

   

