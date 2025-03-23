import React from "react";
import "../../assets/css/common.css";
import "../../assets/css/label.css";
import LabelCard from '../common/Main/AddPart/LabelCard';
import AddProject from "../common/Project/AddProject";
import GetProjects from "../common/Project/GetProjects";

const Project = () => {
    return(
        <div className="main">
            <p class="label">Projects</p>
            <p class="sublabel"></p>
            <LabelCard />
            <AddProject />
            <GetProjects />
        </div>
    )
}

export default Project;