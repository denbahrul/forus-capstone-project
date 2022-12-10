import React from "react";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import {FiLogOut} from 'react-icons/fi';
import {BiNews} from 'react-icons/bi'

function Navbar({searchEventHandler, setKeyword}) {
    const name = localStorage.getItem('name')
    return (
        <nav>
            <h1>ForUs</h1>
            <SearchBar searchEventHandler={searchEventHandler} setKeyword={setKeyword}  />
            {/* <div className="post-avatar"></div> */}
            <h3 className="name">{name}</h3>
        </nav>
    )
}

function BottomNavbar() {
    const navigate = useNavigate();
    function logout() {  
      localStorage.removeItem('id');
      localStorage.removeItem('name');
      navigate("/login")
      navigate(0);
    }
    return (
        <div className="bottom-nav">
            <Link to="/home"><AiOutlineHome size={28}/></Link>
            <Link to="/trending"><AiOutlineFire size={28}/></Link>
            <Link to="/news"><BiNews size={28}/></Link>
            <button className="button-logout" onClick={logout}>
          <FiLogOut size={28} />

            </button>
        </div>
    )
}

export {BottomNavbar, Navbar};