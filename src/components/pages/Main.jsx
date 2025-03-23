import React from "react";
import "../../assets/css/common.css";
import "../../assets/css/label.css";
import LabelCard from '../common/Main/AddPart/LabelCard';
import GeneralContractor from "../common/Main/AddPart/GeneralContractor";
import SubContractor from "../common/Main/AddPart/SubContractor";
import GetSubcontractorData from "../common/Main/AddPart/GetSubContractorData";
import GetSubContractors from "../common/Main/AddPart/GetSubContractors";
import GetGeneralContractors from "../common/Main/AddPart/GetGeneralContractors";

const Main = () => {
    return(
        <div className="main">
            <p class="label">Contractors</p>
            <p class="sublabel"></p>
            <LabelCard />
            <GeneralContractor />
            <GetGeneralContractors />
            <SubContractor />
            <GetSubContractors />
        </div>
    )
}

export default Main;