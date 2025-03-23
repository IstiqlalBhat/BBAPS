import React, { useState } from "react";
import mainContract from "../../../config/contract";
import curAccount from '../../../config/curAccount';

const CalculateTrustFactor = (props) => {
    const [subcontractorAddress, setSubContratorAddress] = useState('');
    const [res, setRes] = useState(0);

    const changeSubcontractorAddress = (evt) => {
        evt.preventDefault();
        setSubContratorAddress(evt.target.value);
    }

    const setTrutFactor = async (evt) => {
        evt.preventDefault();
        console.log(mainContract);
        await mainContract.methods.calculateTrustFactor(subcontractorAddress).call()
            .then(res => setRes(res))
            .catch(err => console.log(err))
    }
    
    return (
        <div class="bg-[#2E3A41] mt-[2%] p-2 h-auto shadow-md text-center md:w-[50%] lg:w-[35%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            <p class="text-lg text-white font-bold mb-2">Calculate Trust Factor:</p>
            <p class="text-md text-white font-thin mb-2">subcontractorAddress:</p>
            <input type="text" id='subcontractorAddress' className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeSubcontractorAddress} />
            <p class="text-md text-white font-thin mb-2">{`Result: ${res}`}</p>
            <p>
                <button className="w-[70%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onClick={setTrutFactor}>SetTrustFactor</button>
            </p>
        </div>
    )
}

export default CalculateTrustFactor;