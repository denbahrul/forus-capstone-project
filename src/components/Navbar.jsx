import React from "react";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import {BsBookmark} from 'react-icons/bs';

function Navbar() {
    return (
        <nav>
            <h1>ForUs</h1>
            <SearchBar />
            <div className="post-avatar"></div>
        </nav>
    )
}

function BottomNavbar() {
    return (
        <div className="bottom-nav">
            <Link to="/home"><AiOutlineHome size={28}/></Link>
            <Link to="/trending"><AiOutlineFire size={28}/></Link>
            <Link to="/Tersimpan"><BsBookmark size={28}/></Link>
        </div>
    )
}

export {BottomNavbar, Navbar};
