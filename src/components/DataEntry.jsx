
function DataEntry (props){
    const modifierFun = props.mod;
    // const General = props.data.GeneralInfo;
    console.log(props);
    return <>
        <input type="text" 
                value={props.data.GeneralInfo.name} 
                onChange={(event) => {
                    const newGeneralInfo = {...props.data.GeneralInfo,name:event.target.value}
                    const newData = {...props.data,GeneralInfo:newGeneralInfo};
                    modifierFun(newData)
                }
            }/>
    </>
}

export {DataEntry}
