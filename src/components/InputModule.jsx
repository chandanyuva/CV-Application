export default function InputModule(props) {
    // console.log(props);
    function handleEvent(event, key) {
        // console.log(key)
        const newGeneralInfo = {
            ...props.data[props.section],
            [key]: event.target.value,
        };
        const newData = { ...props.data, [props.section]: newGeneralInfo };
        // console.log(newData);
        props.modifierFun(newData);
    }
    // console.log(props.data[props.section][props.value]);
    return (
        <>
            <div className="row">
                <label className="form-label col" htmlFor={props.value}>
                    {`${props.value}:`}
                </label>
                <input
                    className="form-control col"
                    id={props.value}
                    type={props.type}
                    value={props.data[props.section][props.value]}
                    onChange={(event) => {
                        handleEvent(event, props.value);
                    }}
                />
            </div>
            {/* <input
                type="text"
                value={props.data[props.section][props.value]}
                onChange={(event) => {
                    handleEvent(event, props.value);
                }}
            /> */}
        </>
    );
}
