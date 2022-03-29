import React from "react";
import journalicon from "../images/journal-icon.png";

export default function Navbar(){
    return (
        <nav className="nav">
            <img src = {journalicon} className="nav-icon"  />
            <h3>My travel Journal</h3>
        </nav>
    )
}