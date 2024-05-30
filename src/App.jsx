import { useState } from "react";
import { DataEntry } from "./components/DataEntry";
import { DataPrev } from "./components/DataPrev";
import "./app.css";
import { v4 as uuidv4 } from "uuid";
// uuidv4();

function App() {
    const [data, setData] = useState({
        GeneralInfo: {
            name: "chandan",
            email: "",
            phNo: "",
        },
        EducationalInfo: {
            schoolName: "",
            fieldOfStudy: "",
            graduactionYear: "",
        },
        ExperenceInfo: {
            company: "",
            position: "",
            noOfYears: "",
        },
    });
    return (
        <>
            <DataEntry data={data} mod={setData}></DataEntry>
            <DataPrev data={data}></DataPrev>
        </>
    );
}

export default App;
