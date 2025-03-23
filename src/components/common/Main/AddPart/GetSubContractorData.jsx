import React, { useState } from "react";
import mainContract from "../../../../config/contract";
import curAccount from '../../../../config/curAccount';

const GetGeneralContractors = (props) => {
    const [address, setAddress] = useState(0);
    const [res, setRes] = useState({});

    const changeAddress = (evt) => {
        evt.preventDefault();
        setAddress(parseInt(evt.target.value));
    }

    const getSubContractors = async (evt) => {
        evt.preventDefault();
        console.log(address);
        // await mainContract.methods.subContractors(address).call()
        //     .then(res => {{
        //             let resData = {
        //                 id: parseInt(res.id),
        //                 name: res.name,
        //                 account: res.account
        //             }
        //             setRes(resData);
        //     }})
        //     .catch(err => console.log(err))
    }
    
    return (
        <div class="bg-[#2E3A41] mt-[2%] p-2 h-auto shadow-md text-center md:w-[50%] lg:w-[35%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            <p class="text-lg text-white font-bold mb-2">Get Sub Contractors:</p>
            <p class="text-md text-white font-thin mb-2">ID:</p>
            <input type="text" id='projectId' className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeAddress} />
            <p>
                <button className="w-[70%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onClick={getSubContractors}>Get SubContractors</button>
            </p>
            <p class="text-md text-white font-thin mb-2">Result</p>
            <table className="text-sm font-thin text-white text-center w-[100%]">
                <thead>
                    <th>
                        id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        account
                    </th>
                </thead>
                <tbody>
                    <td>
                        {res.id}
                    </td>
                    <td>
                        {res.name}
                    </td>
                    <td>
                        {res.account}
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default GetGeneralContractors;
