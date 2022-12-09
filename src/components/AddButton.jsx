import React from "react";
import { Link } from "react-router-dom";
import {AiFillPlusSquare} from "react-icons/ai"

function AddButton() {
    return (
        <Link to="/addArgument">    
            <div className="add-button">
                <p>Buat Aspirasi</p>
                <AiFillPlusSquare size={42} />
            </div>
        </Link>
    )
}

export default AddButton;