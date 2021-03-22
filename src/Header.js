import React from "react"
import "./Header.css"

export default function Header(){
    return (
        <header>
            <h1>Track my stocks</h1>
            <div className="login-form">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
            </div>
        </header>
    )
}