import React, { useState } from "react";
import mainContract from "../../../config/contract";
import curAccount from '../../../config/curAccount';

const SetTrustFactor = (props) => {
    const [subcontractorAddress, setSubContratorAddress] = useState('');
    const [conformityToCost, setConformityToCost] = useState(0);
    const [conformityToTime, setcConformityToTime] = useState(0);
    const [conformityToQuality, setConformityToQuality] = useState(0);
    const changeSubcontractorAddress = (evt) => {
        evt.preventDefault();
        console.log(subcontractorAddress);
        setSubContratorAddress(evt.target.value);
    }

    const changeConformityToCost = (evt) => {
        evt.preventDefault();
        setConformityToCost(parseInt(evt.target.value));
        console.log(conformityToCost);
    }

    const changeConformityToTime = (evt) => {
        evt.preventDefault();
        
        setcConformityToTime(parseInt(evt.target.value));
        console.log(conformityToTime);
    }
    
    const changeConformityToQuality = (evt) => {
        evt.preventDefault();
        
        setConformityToQuality(parseInt(evt.target.value));
        console.log(conformityToQuality);
    }

    const setTrutFactor = async (evt) => {
        evt.preventDefault();
        console.log(mainContract);
        if((conformityToCost >= 1 && conformityToCost <= 10) &&
            (conformityToTime >= 1 && conformityToTime <= 10) &&
            (conformityToQuality >= 1 && conformityToQuality <= 10)){
            await mainContract.methods.setTrustFactor(
                subcontractorAddress, 
                conformityToCost, 
                conformityToTime, 
                conformityToQuality
            ).send({from: curAccount})
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            alert('Invalid input')
        }
    }
    
    return (
        <div class="bg-[#2E3A41] mt-[2%] p-2 h-auto shadow-md text-center md:w-[50%] lg:w-[35%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            <p class="text-lg text-white font-bold mb-2">Set Trust Factor:</p>
            <p class="text-md text-white font-thin mb-2">subcontractorAddress:</p>
            <input type="text" id='subcontractorAddress' className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeSubcontractorAddress} />
            <p class="text-md text-white font-thin mb-2">conformityToCost:</p>
            <input type="text" id="conformityToCost" className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeConformityToCost} />
            <p class="text-md text-white font-thin mb-2">conformityToTime:</p>
            <input type="text" id="conformityToTime" className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeConformityToTime} />
            <p class="text-md text-white font-thin mb-2">conformityToQuality:</p>
            <input type="text" id="conformityToQuality" className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeConformityToQuality} />
            <p>
                <button className="w-[70%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onClick={setTrutFactor}>SetTrustFactor</button>
            </p>
        </div>
    )
}

export default SetTrustFactor;