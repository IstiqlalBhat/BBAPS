import React from "react";
import SetTrustFactor from "../common/TrustFactor/SetTrustFactor";
import LabelCard from "../common/Main/AddPart/LabelCard";
import CalculateTrustFactor from "../common/TrustFactor/CalculateTrustFactor";
import GetTrustFactors from "../common/TrustFactor/GetTrustFactors";


const TrustFacto = (props) => {
    return (
        <div>
            <LabelCard />
            <SetTrustFactor />
            <CalculateTrustFactor />
            <GetTrustFactors />
        </div>
    )
}

export default TrustFacto;