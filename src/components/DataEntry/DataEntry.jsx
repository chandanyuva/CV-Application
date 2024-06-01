import InputModule from "../InputModule";

function DataEntry(props) {
    // console.log(props);
    return (
        <>
            {/* <input 
                type="text" 
                value={props.data.GeneralInfo.name} 
                onChange={(event) => {
                    const newGeneralInfo = {...props.data.GeneralInfo,name:event.target.value}
                    const newData = {...props.data,GeneralInfo:newGeneralInfo};
                    modifierFun(newData)
                }
            }
        /> */}
            <section className="generalInfo">
                <InputModule
                    value="name"
                    section="GeneralInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
                <InputModule
                    value="email"
                    section="GeneralInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
                <InputModule
                    value="phNo"
                    section="GeneralInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
            </section>

            <section className="educationalInfo">
                <InputModule
                    value="schoolName"
                    section="EducationalInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
                <InputModule
                    value="fieldOfStudy"
                    section="EducationalInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
                <InputModule
                    value="graduationYear"
                    section="EducationalInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
            </section>
            
            <section className="experienceInfo">
                <InputModule
                    value="company"
                    section="ExperienceInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
                <InputModule
                    value="position"
                    section="ExperienceInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
                <InputModule
                    value="noOfYears"
                    section="ExperienceInfo"
                    modifierFun={props.mod}
                    data={props.data}
                ></InputModule>
            </section>
        </>
    );
}

export { DataEntry };
