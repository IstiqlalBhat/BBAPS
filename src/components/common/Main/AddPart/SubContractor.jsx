import React from "react";
import { useState, useEffect } from "react";
import mainContract from "../../../../config/contract";
import curAccount from "../../../../config/curAccount";

const SubContractor = (props) => {
    const [accountAddresses, setAccountAddresses] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');


    const subGeneralContractor = (evt) => {
        evt.preventDefault();
        console.log(address);
        mainContract.methods.addSubContractor(name, address).send({from: curAccount})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const changeName = evt => {
        evt.preventDefault();
        setName(evt.target.value);
    }

    const changeAddress = evt => {
        evt.preventDefault();
        setAddress(evt.target.value);
    }
    return(
        <div class="bg-[#2E3A41] mt-[2%] p-2 h-auto shadow-md text-center md:w-[50%] lg:w-[35%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            <p class="text-lg text-white font-bold mb-2">Sub Contractors:</p>
            <p class="text-md text-white font-thin mb-2">Name:</p>
            <input type="text" id='name' className="bg-[#242D32] text-white p-2 w-[70%]" placeholder="Name" onChange={changeName} />
            <p class="text-md text-white font-thin mb-2">Address:</p>
            <input type="text" id='address' className="bg-[#242D32] text-white p-2 w-[70%]" placeholder="Address" onChange={changeAddress} />
            <p>
                <button className="w-[70%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onClick={subGeneralContractor}>Add SubContractor</button>
            </p>
        </div>
    )
}

export default SubContractor;