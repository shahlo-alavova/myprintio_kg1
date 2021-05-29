import './App.css';
import PhotoButton from './components/Editing/Photo/photoButton';
import TextButton from './components/Editing/Text/textButton';
import TextEditorToolbar from './components/Editing/Text/TextEditor/textEditorToolbar';
import HeaderItem from './components/Header/header';
import ImageTshirt from './components/ImageTshirt/imageTshirt';
import RealisticviewButton from './components/RealisticView/RealisticViewButton';
import 'primeflex/primeflex.css'
// import DropzoneComponent from './components/Editing/Photo/dropzone';
import imageMickey from './images/12.png'
import Dropzone1 from './components/Editing/Photo/dropzone2';



function App() {
  return (
    <div className="app-wrapper">
        <HeaderItem/>
        <ImageTshirt/>
        <RealisticviewButton/>
        <PhotoButton/>
        <TextButton/>
        <TextEditorToolbar/>
        <Dropzone1/>
        <img className="imgMickey" src={imageMickey}></img>
    </div>
  );
}

export default App;
