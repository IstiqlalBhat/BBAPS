import React from 'react';

const TokenCard = (props) => {
    return (
        <div className='x-[100%] mt-[5px] h-[12%] items-center bg-[#2E3A41] shadow-md rounded-md overflow-hidden' style={{borderRadius: '2px'}}>
            <div class="flex justify-between items-center p-1">
                <div class="flex items-center w-[60%] space-x-2 ">
                    <img width='100%' height='100%' src='./imgs/Untitled.png' />
                </div>
                <div class="flex flex-col items-center space-x-1 pr-[40%]">
                    <span class="flex text-md text-white">STX <span className='text-[#929191] font-thin ml-[5%]'>Stacks</span></span>
                    <span class="text-sm text-[#ccc]">93.009</span>
                </div>
                <div class="flex items-center space-x-2 md:flex pr-[5%]">
                    <span class="text-lg text-[#929191]  font-thin">0.00032KAZI</span>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="text-xl text-[white]">+</button>
                </div>
            </div>
        </div>

    )
}

export default TokenCard;