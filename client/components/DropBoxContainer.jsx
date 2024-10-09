import DropBox from "./DropBox";

function DropBoxContainer(props) {
    return  (

        <div className="dropBoxContainer"> 
            <DropBox doesFileExists={props.doesFileExists}/>
        </div>
    )
}

export default DropBoxContainer;