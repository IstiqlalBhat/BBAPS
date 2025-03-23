import React, { useState } from "react";
import mainContract from "../../config/contract";
import curAccount from '../../config/curAccount';
import LabelCard from "../common/Main/AddPart/LabelCard";

const GetSortedMatch = (props) => {
    let i = 0;
    let location;
    const [projectId, setProjectId] = useState(0);
    const [data, setData] = useState([]);
    const [gcNames, setGCNames] = useState([]);
    const [sbNames, setSbNames] = useState([]);
    const [trustScores, setTrustScores] = useState([]);

    const changeProjectId = (evt) => {
        evt.preventDefault();
        setProjectId(parseInt(evt.target.value));
    }

    const getSortedMatch = async (evt) => {
        evt.preventDefault();
        console.log(curAccount);
        await mainContract.methods.projects(projectId).call()
            .then(res => {
                location = res.location
            })
            .catch(err => console.log(err))
        await mainContract.methods.getSortedMatchesWithGC(projectId).call()
            .then(res => {
                setGCNames(res[0]);
                setSbNames(res[1]);
                setTrustScores(res[2]);
                console.log(res);
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
        <LabelCard />
        <div class="bg-[#2E3A41] mt-[2%] p-2 h-auto shadow-md text-center md:w-[50%] lg:w-[70%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            
            <p class="text-lg text-white font-bold mb-2">GetSortedMatchWithGC:</p>
            <p class="text-md text-white font-thin mb-2">ProjectId:</p>
            <input type="text" id='projectId' className="bg-[#242D32] text-white p-2 w-[30%]" onChange={changeProjectId} />
            <p>
                <button className="w-[30%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onClick={getSortedMatch}>GetSortedMatchWithGC</button>
            </p>
            <p class="text-md text-white font-thin mb-2">Result</p>
            <center>
            <table className="text-white text-sm text-center font-thin w-[80%] items-center">
                <thead>
                    <th>Project Id</th>
                    <th>Location</th>
                    <th>General Contractor</th>
                    <th>Sub Contractor</th>
                    <th>Trust Score</th>
                </thead>
                <tbody>
                    {
                        gcNames.map(item => {
                            if(i == gcNames.length ){
                                i = 0;
                                return;
                            }
                            i ++;
                            return(
                                <tr>
                                <td>{projectId}</td>
                                <td>{item}</td>
                                <td>{sbNames[i]}</td>
                                <td>{trustScores[i]}</td>
                                </tr>
                            )
                            
                        })  
                    }
                </tbody>
            </table>
            </center>
        </div>
        </div>
    )
}

export default GetSortedMatch;