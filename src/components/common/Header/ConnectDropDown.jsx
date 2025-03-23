import React, { useState } from 'react';
import connect from '../../../assets/graphics/Connect';
import connected from '../../../assets/graphics/Connected';
import { Router } from 'react-router';
import "../../../assets/css/header.css";

const ConnectDropDown = (props) => {
    let flg = false;
    const [change, setChange] = useState(false);
   
    const Connected = (
        <button className="dropbtn flex flex-row font-light text-xl ">
            {connected}
            <div className="text-md">Connected</div>
        </button>
    )
    
    const Connect = (
        <button className="dropbtn flex flex-row font-light text-xl ">
            {connect}
            <div className="text-md">Connect Wallet</div>
        </button>
    )

    return (
        <button class="connected-btn">
            <span class="icon">&#10003;</span>
            <span>Connected</span>
        </button>
    )
}

export default ConnectDropDown;