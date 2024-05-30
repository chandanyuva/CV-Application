export default function InputModule(props) {
    console.log(props.data);
    function handleEvent(event, key) {
        const newGeneralInfo = {
            ...props.data.GeneralInfo,
            [key]: event.target.value,
        };
        const newData = { ...props.data, GeneralInfo: newGeneralInfo };
        props.modifierFun(newData);
    }
    return (
        <>
            <input
                type="text"
                value={props.value}
                onChange={(event) => {
                    handleEvent(event, props.value);
                }}
            />
        </>
    );
}
