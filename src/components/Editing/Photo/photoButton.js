import React from "react";
import {FileUpload} from "primereact/fileupload";
import "primereact/resources/primereact.css";

function PhotoButton(){
    
    return(
      <div className="photoButton"> 
      <FileUpload chooseLabel={"+ ФОТО img"} multiple mode="basic"
       customUpload={true} uploadHandler={() => console.log('upload')}/>
  </div>
    );
}


export default PhotoButton;