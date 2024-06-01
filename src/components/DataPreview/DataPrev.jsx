function DataPrev(props) {
    // console.log(JSON.stringify(props.data));
    return (
        <>
            <div className="generalInfo">
                <p>{props.data.GeneralInfo.name}</p>
                <p>{props.data.GeneralInfo.email}</p>
                <p>{props.data.GeneralInfo.phNo}</p>
            </div>
            <div className="educationalInfo">
                <p>{props.data.EducationalInfo.schoolName}</p>
                <p>{props.data.EducationalInfo.fieldOfStudy}</p>
                <p>{props.data.EducationalInfo.graduationYear}</p>
            </div>
            <div className="experienceInfo">
                <p>{props.data.EducationalInfo.company}</p>
                <p>{props.data.EducationalInfo.position}</p>
                <p>{props.data.EducationalInfo.noOfYears}</p>
            </div>
        </>
    );
}

export { DataPrev };
