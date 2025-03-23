import React from 'react';
import TokenList from './TokenList';
import ConvertSetting from './ConvertSetting';
import TokenCard from './TokenCard';

const TokenListCont = (props) => {
    return(
        <div class="bg-[#2E3A41] 0 mt-4 p-2 h-auto shadow-md text-left md:w-[70%] lg:w-[35%]" style={{border: '1px solid #5C666C'}}>
            <div className=' text-right'>
            <button class="bg-[rgba(0,0,0,0)] relative mt-[20px]  ml-[62%] text-white font-medium md:w-40 lg:w-60">
                Select All +
            </button>
            </div>
            <div class="bg-[#242D32] 0 mt-[40px] p-2 h-[430px] rounded-md shadow-md text-left md:w-[100%] lg:w-[100%] mx-auto overflow-auto">
                <TokenCard />
                <TokenCard />
                <TokenCard />
                <TokenCard />
                <TokenCard />
                <TokenCard />
                <TokenCard />
                <TokenCard />
            </div>
            <ConvertSetting />
            <button className='w-[100%] p-[3%] bg-[#00ACE6] text-lg text-white font-medium mt-2 rounded-md'>Connect small accounts</button>
        </div>
    )
}

export default TokenListCont;