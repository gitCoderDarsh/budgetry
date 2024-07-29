import React from "react";

function Register(){

    return(
    <div className="form">
        <form action="">
            <input type="text" placeholder="Username" id="userName"/>
            <input type="email" placeholder="Email" id="email"/>
            <input type="password" placeholder="Password" id="password"/>
        </form>
    </div>
    );
}

export default Register;