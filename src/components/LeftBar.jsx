import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import {BsBookmark} from 'react-icons/bs'


function LeftBar() {
  return (
    <div class="sidebar">

      <div className="sidebar-item">
      <p><Link to="/home"><AiOutlineHome /> Beranda</Link></p>
      <p><Link to="/trending"><AiOutlineFire /> Trending</Link></p>
      <p><Link to="/Tersimpan"><BsBookmark /> Tersimpan</Link> </p>
      </div>
      <div className="sidebar-item">
        <p>uhuy2</p>
      </div>
    </div>
  );
}

export default LeftBar;
