import { useState } from "react";
import { DataEntry } from "./components/DataEntry/DataEntry";
import { DataPrev } from "./components/DataPreview/DataPrev";
import "./app.css";
// import { v4 as uuidv4 } from "uuid";
// uuidv4();

function App() {
    const [data, setData] = useState({
        GeneralInfo: {
            Name: "",
            email: "",
            phNo: "",
        },
        EducationalInfo: {
            schoolName: "",
            fieldOfStudy: "",
            graduationYear: "",
        },
        ExperienceInfo: {
            company: "",
            position: "",
            noOfYears: "",
        },
    });
    return (
        <>
            <div className="container ">
                <div className="row">
                    <DataEntry data={data} mod={setData}></DataEntry>
                    <DataPrev data={data}></DataPrev>
                </div>
            </div>
        </>
    );
}

export default App;
