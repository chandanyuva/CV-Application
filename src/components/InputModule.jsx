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
            <input
                type="text"
                value={props.data[props.section][props.value]}
                onChange={(event) => {
                    handleEvent(event, props.value);
                }}
            />
        </>
    );
}
