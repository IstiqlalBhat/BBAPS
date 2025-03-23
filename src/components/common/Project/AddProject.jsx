import React, { useState } from "react";
import mainContract from "../../../config/contract";
import curAccount from "../../../config/curAccount";
import Papa from 'papaparse';

const AddProject = (props) => {
    const [parseRes, setParseRes] = useState([]);
    const [fields, setFields] = useState([]);
    const [workSchedulefrom, setworkSchedulefrom] = useState('');
    const [workScheduleto, setworkScheduleto] = useState('');
    const [location, setLocation] = useState('');
    const [workType, setworkType] = useState('');
    const [materialUnitCost, setMaterialUnitCost] = useState(0);
    const [laborUnitCost, setLaborUnitCost] = useState(0);
    const [totalquantity, setTotalquantity] = useState(0);
    const [totalConstructionCost, settTotalConstructionCost] = useState(0);

    const handleClick= (item) =>{
        setworkType(item["Family and Type"])
        setMaterialUnitCost(parseInt(item["Material Costs"]))
        setLaborUnitCost(parseInt(item["Labor Costs"]))
    }

    const addProject = async () => {
      debugger
        await mainContract.methods.addProject(
            workSchedulefrom, 
            workScheduleto, 
            location, 
            workType, 
            materialUnitCost, 
            laborUnitCost,
            totalquantity,
            totalConstructionCost
        ).send({from: curAccount})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const changeWorkFrom = evt => {
        setworkSchedulefrom(evt.target.value);
    }

    const changeWorkTo = evt => {
        setworkScheduleto(evt.target.value);
    }

    const changeLocation= evt => {
        setLocation(evt.target.value);
    }

    const changeTotalquantity = evt => {
        setTotalquantity(parseInt(evt.target.value));
    }
    const changeTotalConstructionCost = evt => {
        settTotalConstructionCost(parseInt(evt.target.value));
    }

    const fetchData = (jsondata) => {
        let res = [];
        Object.entries(jsondata).forEach(([key, value]) => {
            res.push(value);
        })

        return res; 
    }

    
    return(
        <div className="bg-[#2E3A41] w-[100%] mt-[2%] flex flex-row">
        <div className="basis-1/4 mt-[2%] p-2 h-auto shadow-md text-center md:w-[50%] lg:w-[10%] sm:w-[60%] mx-auto" style={{border: '1px solid #5C666C'}}>
            <p class="text-lg text-white font-bold mb-2">Project</p>
            <p class="text-md text-white font-thin mb-2">workSchedulefrom:</p>
            <input type="date" id='workSchedulefrom' className="bg-[#242D32] text-white p-2 w-[90%]" onChange={changeWorkFrom}  placeholder="Enter Work Schedule start"
            />
            <p class="text-md text-white font-thin mb-2">workScheduleto:</p>
            <input type="date" id='workScheduleto' className="bg-[#242D32] text-white p-2 w-[90%]" onChange={changeWorkTo} placeholder="Enter Work Schedule End"/>
            <p class="text-md text-white font-thin mb-2">location:</p>
            <input type="text" id='location' className="bg-[#242D32] text-white p-2 w-[90%]" onChange={changeLocation} placeholder="Enter Location"/>
            <p class="text-md text-white font-thin mb-2">workType:</p>
            <input type="text" id='workType' 
            value={workType} 
            className="bg-[#242D32] text-white p-2 w-[90%]"
            readOnly placeholder="Select Work Type"
             />
            <p class="text-md  text-white font-thin mb-2">materialUnitCost:</p>
            <input type="text" id='materialUnitCost' value={materialUnitCost} className="bg-[#242D32] text-white p-2 w-[90%]" readOnly />

            <p class="text-md text-white font-thin mb-2">laborUnitCost:</p>
            <input type="text" id='laborUnitCost' value={laborUnitCost} className="bg-[#242D32] text-white p-2 w-[90%]" readOnly  />
            <p class="text-md text-white font-thin mb-2">totalquantity:</p>
            <input type="number" id='totalquantity' className="bg-[#242D32] text-white p-2 w-[90%]"  onChange={changeTotalquantity} min={0} placeholder="Enter Total Quantity"/>
            <p class="text-md text-white font-thin mb-2">totalConstructionCost:</p>
            <input type="number" id="totalConstructionCost"  className="bg-[#242D32] text-white p-2 w-[70%]" onChange={changeTotalConstructionCost} min={0}  placeholder="Enter Total Construction Cost" />
            <p>
                <button className="w-[70%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onClick={addProject}>Add Project</button>
            </p>
        </div>
        <div className="basis-3/4">
            <p>
                <input type="file" className="w-[70%] mt-2 text-white font-medium rounded-md p-2 bg-[#32c0ca]" onChange={async (evt) => {
                    evt.preventDefault();
                    const reader = new FileReader();
                    const file = evt.target.files[0];
                    let contents;
                    if(file) {
                        reader.onload = (evt) => {
                            contents = evt.target.result;
                            let tmp = contents.split('\n');
                            tmp.splice(0, 1);
                            console.log(tmp);
                            let fields = tmp[0].split(',');
                            console.log(fields);
                            setFields(fields);
                            contents = '';
                            tmp.forEach(element => {
                               contents += (element + '\n'); 
                            });
                            Papa.parse(contents, {
                                header: true,
                                complete: (result) => {
                                    let i = 0;
                                    let tmp = result.data.map(item =>{
                                        return item = {...item, key: i++}
                                    }
                                    )
                                    setParseRes(tmp);
                                    console.log(result);
                                }
                            });
                        }

                        reader.readAsText(file);
                    }
                    
                    
        
                }}></input>
            </p>
        <table className="text-sm font-thin text-white text-center w-[100%] overflow-auto">
                <thead>
                    {fields.map(item => (
                        <th>{item}</th>
                    ))}
                </thead>
                <tbody>
                    {                     
                        parseRes.map(item => (
                                <tr className=" hover:bg-black  cursor-pointer" onClick={() => {
                                    handleClick(item)
                                }}>
                                    {
                                        fetchData(item).map(element => (
                                            <td>{element}</td>
                                        ))
                                    }
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default AddProject;