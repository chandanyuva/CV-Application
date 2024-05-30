import InputModule from "../InputModule";

function DataEntry (props){
    const modifierFun = props.mod;
    // console.log(props);
    return <>
        <input type="text" 
                value={props.data.GeneralInfo.name} 
                onChange={(event) => {
                    const newGeneralInfo = {...props.data.GeneralInfo,name:event.target.value}
                    const newData = {...props.data,GeneralInfo:newGeneralInfo};
                    modifierFun(newData)
                }
            }
        />
        <InputModule value={props.data.GeneralInfo.email} modifierFun = {props.mod} data={props.data}></InputModule>
    </>
}

export {DataEntry}
