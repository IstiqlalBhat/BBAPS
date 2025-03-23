import React from "react";
import "../../assets/css/common.css";
import ConnectDropDown from "../common/Header/ConnectDropDown";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                
            </div>
            <nav>
                <ul>
                    <li><Link to='/' >Contractor</Link></li>
                    <li><Link to='/project' >Project</Link></li>
                    <li><Link to='/trustfactor' >Trust Factor</Link></li>
                    <li><Link to='/getSortedMatch' >GetSortedMatchWithGC</Link></li>
                    <li><a href="#"><ConnectDropDown /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;