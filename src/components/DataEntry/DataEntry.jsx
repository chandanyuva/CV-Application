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
            <div className="col">
                <section className="generalInfo">
                    <form>
                        <div className="mb-3">
                            <fieldset>
                                <legend>General Info</legend>
                                <InputModule
                                    value="Name"
                                    section="GeneralInfo"
                                    modifierFun={props.mod}
                                    data={props.data}
                                    type="text"
                                ></InputModule>
                                <InputModule
                                    value="email"
                                    section="GeneralInfo"
                                    modifierFun={props.mod}
                                    data={props.data}
                                    type="email"
                                ></InputModule>
                                <InputModule
                                    value="phNo"
                                    section="GeneralInfo"
                                    modifierFun={props.mod}
                                    data={props.data}
                                    type="tel"
                                ></InputModule>
                            </fieldset>
                        </div>
                    </form>
                </section>

                <section className="educationalInfo">
                    <form>
                        <div className="mb-3">
                            <fieldset>
                                <legend>Educational Info</legend>
                                <InputModule
                                    value="schoolName"
                                    section="EducationalInfo"
                                    modifierFun={props.mod}
                                    data={props.data}
                                    type="text"
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
                            </fieldset>
                        </div>
                    </form>
                </section>

                <section className="experienceInfo">
                    <form>
                        <div className="mb-3">
                            <fieldset>
                                <legend>experience Info</legend>
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
                            </fieldset>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export { DataEntry };
