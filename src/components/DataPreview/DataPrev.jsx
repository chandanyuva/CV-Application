import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function DataPrev(props) {
    // console.log(JSON.stringify(props.data));
    const pdfRef = useRef();
    const handleDownloadPdf = async () => {
        // conversion from component to canvas to pdf
        const element = pdfRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("print.pdf");
    };
    return (
        <>
            <div className="col container" ref={pdfRef}>
                <div className="generalInfo">
                    <h4>General Information</h4>
                    <p>Name: {props.data.GeneralInfo.Name}</p>
                    <p>E-mail: {props.data.GeneralInfo.email}</p>
                    <p>Phone-no: {props.data.GeneralInfo.phNo}</p>
                </div>
                <div className="educationalInfo">
                    <h4>Educational Info</h4>
                    <p>Collage Name: {props.data.EducationalInfo.schoolName}</p>
                    <p>Course :{props.data.EducationalInfo.fieldOfStudy}</p>
                    <p>YOP{props.data.EducationalInfo.graduationYear}</p>
                </div>
                <div className="Experience Info">
                    <h4>Experience Info</h4>
                    <p>Company Name: {props.data.ExperienceInfo.company}</p>
                    <p>Position: {props.data.ExperienceInfo.position}</p>
                    <p>YOE: {props.data.ExperienceInfo.noOfYears}</p>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={handleDownloadPdf}
                    >
                        Download as PDF
                    </button>
                </div>
            </div>
        </>
    );
}

export { DataPrev };
