import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import {BsBookmark} from 'react-icons/bs'


function RightBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <p>Iklan</p>
            </div>
            
        </div>
    )

}

function LeftBar() {
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
          <Link to="/saved">
            <div className="sidebar-menu">
              <BsBookmark size={28}/>
              <p>Tersimpan</p>
            </div>
          </Link>
        </div>
        <div className="sidebar-item">
          <p>uhuy2</p>
        </div>
      </div>
    );
  }

export { RightBar , LeftBar };