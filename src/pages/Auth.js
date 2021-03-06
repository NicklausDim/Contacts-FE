import './Auth.css';
import React, { Component }  from 'react';
import { useHistory } from "react-router-dom";
export default function(props) {
    let history = useHistory();

    let submitHandler = (e) => {
        e.preventDefault();
        console.log(e);

        let data = {};
        data.email = e.target[0].value;
        data.pass = e.target[1].value;

        let urlRegister = 'https://contacts-backend-v1.herokuapp.com/auth/register';
        let urlLogin = 'https://contacts-backend-v1.herokuapp.com/auth/login';
        let options = {
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        }

        if (e.nativeEvent.submitter.id == "register") {
            fetch(urlRegister, options).then(result=>result.json().then(output=>
                {
                    if (output.status == 'success') {
                        alert('Congrats, you registered as well! Please login.')
                    } else {
                        alert(output.message)
                    }
                    console.log(output);
                }));
        } else if (e.nativeEvent.submitter.id == "login") {
            fetch(urlLogin, options)
            .then(result=>result.json()
                .then(output=>{
                    alert(output.message);
                    console.log(output);
                    localStorage.setItem('token',output.token);
                    history.push('/contacts');

/* 
                    if (output.status == 'success') {
                        localStorage.setItem('token', output.token);
                        //console.log(props.setIsLoggedIn);
                        //props.setIsLoggedIn(true);
                    } else {
                        localStorage.removeItem('token');
                    }
                     */
                }));
        }
    }

    return (
        <div className = "wrapper">
            <form onSubmit = {submitHandler}>
                <input name = "email" type = "email" />
                <input  name = "pass" type = "password" />
                <section>
                    <input id = "register" type = "submit" value = "Register"/>
                    <input id = "login" type = "submit" value = "Login"/>
                </section>
            </form>
        </div>
    )
}

