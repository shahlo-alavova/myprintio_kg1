import './App.css';
import PhotoButton from './components/Editing/Photo/photoButton';
import TextButton from './components/Editing/Text/textButton';
import TextEditorToolbar from './components/Editing/Text/TextEditor/textEditorToolbar';
import HeaderItem from './components/Header/header';
import ImageTshirt from './components/ImageTshirt/imageTshirt';
import RealisticviewButton from './components/RealisticView/RealisticViewButton';
import 'primeflex/primeflex.css'
import DropzoneComponenta from './components/Editing/Photo/dropzone';



function App() {
  return (
    <div className="app-wrapper">
        <HeaderItem/>
        <ImageTshirt/>
        <RealisticviewButton/>
        <PhotoButton/>
        <TextButton/>
        <TextEditorToolbar/>
        <DropzoneComponenta/> 
    </div>
  );
}

export default App;
