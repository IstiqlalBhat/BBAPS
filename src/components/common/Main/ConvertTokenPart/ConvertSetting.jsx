import React from 'react';
import '../../../../assets/css/common.css';

const ConvertSetting = (props) => {
    return (
        <div className='flex flex-col' style={{
            backgroundColor: '#242D32',
            marginTop: '20px',
            width: '100%',
            borderSpacing: '10px',
            borderRadius: '5px',
            padding: '15px',
            minHeight: '200px',
            height: 'auto'
        }}>
            <div className='flex flex-col md:flex-row items-center'>
                <h2 className='md:w-4/5 md:font-light md:text-xl flex-shrink-0 font-medium text-lg text-white mb-2 md:mb-0'>Token</h2>
                <div className='flex items-center md:ml-2'>
                    <img width='30' height='30' src='./imgs/1.png' alt='Token Image' />
                </div>
                <h3 className='md:w-1/7 text-[#ccc] font-medium md:ml-2'>KAZI</h3>
            </div>
        
            <div className='flex flex-col md:flex-row mt-5 items-center'>
                <h2 className='md:w-4/5 flex-shrink-0 font-medium text-lg text-white mb-2 md:mb-0'>Minimum Converted</h2>
                <div className='flex flex-col md:flex-row md:items-center md:ml-2'>
                    <h3 className='md:w-1/2 text-[#ccc] font-medium mb-2 md:mb-0 md:mr-2'>KAZI {`>$0.01`}</h3>
                </div>
            </div>
        
            <div className='flex flex-col md:flex-row mt-5'>
                <h2 className='md:w-2/4 flex-shrink-0 font-medium text-lg text-white mb-2 md:mb-0'>Minimum Converted</h2>
                <div className='flex flex-col md:flex-row md:items-center relative  md:ml-2'>
                    <button className='perBtn p-2 mr-1 md:mr-2 mt-1'>1%</button>
                    <button className='perBtn p-2 mr-1 md:mr-2 mt-1'>2%</button>
                    <button className='perBtn p-2 mr-1 md:mr-2 mt-1'>5%</button>
                    <button className='perBtn p-2 mt-1'>10%</button>
                </div>
            </div>
        </div>
    )
}

export default ConvertSetting;