import React from 'react';
import DropzoneComponent from '../Editing/Photo/dropzone';
import tshirt from './../../images/11.jpg';
import './../../App.css';

function ImageTshirt(){
return(
<div>
       <div className='tshirtWrap'><img action="/upload-target" class="dropzone" alt='futbolka' className="imageTshirt" src={tshirt}></img>
      <label id='textsection' className='textTshirt'>Введите текст</label></div>
      <DropzoneComponent/>
      </div>);
}

export default ImageTshirt;