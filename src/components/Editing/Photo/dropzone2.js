import React, {useState} from 'react'

const Dropzone1 = () => {
const [Drag, setDrag] = useState(false);

function dragStartHandler(e){
    e.preventDefault();
    setDrag(true);
}

function dragLeaveHandler(e){
    e.preventDefault();
    setDrag(false);
}

function onDropHandler(e){
e.preventDefault();
let files=[...e.dataTransfer.files]
console.log(files);
setDrag(false);
}


 return(
<div>
    {Drag ? <div className="drop-area" 
    onDragOver ={e => dragStartHandler(e)}
    onDragLeave={e => dragLeaveHandler(e)}
    onDragStart={e=> dragStartHandler(e)}
    onDrop={e=> onDropHandler(e)}
    >Отпустите файлы, чтобы загрузить их</div>
    : <div
    onDragOver ={e => dragStartHandler(e)}
    onDragLeave={e => dragLeaveHandler(e)}
    onDragStart={e=> dragStartHandler(e)}
    
    > Перетащите файлы</div>}
</div>
 )

}

export default Dropzone1;