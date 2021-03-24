import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <div className="navbar">
            <p className="component-title"> this is the navbar</p>
            <Link path='/'><p className="navbar-links">See all stocks</p></Link>
            <Link path='/my-stocks'><p className="navbar-links">See my stocks</p></Link>
        </div>
    )
}