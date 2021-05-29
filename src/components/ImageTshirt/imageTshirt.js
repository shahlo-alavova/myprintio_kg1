import React from 'react';
import tshirt from './../../images/11.jpg'

function ImageTshirt(){
return(
<div>
       <img action="/upload-target" class="dropzone" alt='futbolka' className="imageTshirt" src={tshirt}></img>
      <textarea id='textsection' type="text">Введите текст</textarea>
      </div>);
}

export default ImageTshirt;