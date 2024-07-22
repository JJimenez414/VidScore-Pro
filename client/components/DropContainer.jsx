import DropBox from "./DropBox";

function Dropdown(props) {
    return  (

        <div className="dropBox"> 
            <DropBox doesFileExists={props.doesFileExists}/>
        </div>
    )
}

export default Dropdown;