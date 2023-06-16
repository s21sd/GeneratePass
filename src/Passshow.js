import React from "react";


export default function Passshow({ password }) {

    // this is fnction to copy the password
    const copyPassword = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard 😊")
    }
    return (

        <div className="passworddiv">
            <h1 className="password">{password}</h1>
            <img onClick={copyPassword} className="copyimg" src="/img/download.png" />
        </div>
    )
}