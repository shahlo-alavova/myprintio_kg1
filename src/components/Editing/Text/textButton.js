import React from 'react';
import {Link} from 'react-scroll'
function TextButton(){
    return(
        <div>
         <Link to="textsection" smooth={true} duration={1000}><button className="textButton"> + Text A</button></Link> 
      </div>
    );
}

export default TextButton;