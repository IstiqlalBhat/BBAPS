import React, { useState } from "react";
import mainContract from "../../../config/contract";
import curAccount from '../../../config/curAccount';

const GetProjects = (props) => {
    const [address, setAddress] = useState(0);
    const [res, setRes] = useState({});

    const changeAddress = (evt) => {
        evt.preventDefault();
        setAddress(parseInt(evt.target.value));
    }

    const getProjects = async (evt) => {
        evt.preventDefault();
        console.log(address);
        await mainContract.methods.projects(address).call()
            .then(res => {{
                    let resData = {
                        id: parseInt(res.id),
                        location: res.location,
                        laborUnitCost: parseInt(res.laborUnitCost),
                        materialUnitCost: parseInt(res.materialUnitCost),
                        totalquantity: parseInt(res.totalquantity),
                        totalConstructionCost: parseInt(res.totalConstructionCost),
                        workSchedulefrom: res.workSchedulefrom,
                        workScheduleto: res.workScheduleto,
                        worktype: res.worktype
                    }
                    setRes(resData);
                    console.log(res);
            }})
            .catch(err => console.log(err))
    }
    
    return (
        <div class="bg-[#2E3A41] mt-[2%] p-2 h-auto shadow-md text-center md:w-[50%] lg:w-[35%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            <p class="text-lg text-white font-bold mb-2">Get Projects:</p>
            <p class="text-md text-white font-thin mb-2">ID:</p>
            <input type="text" id='projectId' className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeAddress} />
            <p>
                <button className="w-[70%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onClick={getProjects}>Get SubContractors</button>
            </p>
            <p class="text-lg text-white font-thin mb-2">Result</p>
            <div className="text-left">
                <p class="text-sm text-white font-thin mb-2">ID: {`${res.id}`}</p>
                <p class="text-sm text-white font-thin mb-2">Location: {`${res.location}`}</p>
                <p class="text-sm text-white font-thin mb-2">laborUnitCost: {`${res.laborUnitCost}`}</p>
                <p class="text-sm text-white font-thin mb-2">materialUnitCost: {`${res.materialUnitCost}`}</p>
                <p class="text-sm text-white font-thin mb-2">totalConstructionCost: {`${res.totalConstructionCost}`}</p>
                <p class="text-sm text-white font-thin mb-2">totalquantity: {`${res.totalquantity}`}</p>
                <p class="text-sm text-white font-thin mb-2">workSchedulefrom: {`${res.workSchedulefrom}`}</p>
                <p class="text-sm text-white font-thin mb-2">workScheduleto: {`${res.workScheduleto}`}</p>
                <p class="text-sm text-white font-thin mb-2">worktype: {`${res.worktype}`}</p>
            </div>

            
        </div>
    )
}

export default GetProjects;
