import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import {FiLogOut} from 'react-icons/fi';
import {BiNews} from 'react-icons/bi'

function RightBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
              <div className="sidebar-menu">
                <BiNews size={28}/>
                <p>Headline Indonesia</p>
              </div>
            </div>
        </div>
    )

}

function LeftBar() {
  const navigate = useNavigate();
  function logout() {  
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    navigate("/login")
    navigate(0);
  }

    return (
      <div className="sidebar">
        <div className="sidebar-item">
          <Link to="/home">
            <div className="sidebar-menu">
              <AiOutlineHome size={28}/>
              <p> Beranda</p>
            </div>
          </Link>
          <Link to="/trending">
            <div className="sidebar-menu">
              <AiOutlineFire size={28}/>
              <p>Trending</p>
            </div>
          </Link>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-menu">
          <button className="button-logout" onClick={logout}>
          <FiLogOut size={28} />
            <p> Keluar</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

export { RightBar , LeftBar };