import React, { useEffect } from 'react';
import curAccount from '../../../../config/curAccount';

const LabelCard = (props) => {
    return (
        <div class="bg-[#2E3A41] 0 mt-[2%] p-2 h-[70px] shadow-md text-left md:w-[50%] lg:w-[35%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            <p class="text-lg text-white font-bold mb-2">Current Account Address</p>
            <p class="text-xxsm font-light text-[#ccc] md:text-base float-start">{curAccount}</p>
        </div>
    )
}

export default LabelCard;