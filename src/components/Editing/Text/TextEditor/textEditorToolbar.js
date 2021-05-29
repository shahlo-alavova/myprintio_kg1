import React, { useState } from "react";
import * as _ from "lodash";
import { Editor } from "@tinymce/tinymce-react";

 function TextEditorToolbar() {
  const [editorContent, setEditorContent] = useState();

  const handleEditorChange = (content) => {
    setEditorContent(content);
    console.log(content)
  };

  return (
    <div className="textEditor">
      <Editor
        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        onEditorChange={handleEditorChange}
        value={editorContent}
        init={{
          height: 400,
          icons: "jam",
          skin: "fabric",
          // content_css: "document",
          resize: false,
          selector: 'textarea',  // change this value according to your HTML
          menubar: false,
          toolbar: 'undo redo | fontselect | fontsize-formats | bold italic | alignleft | aligncenter | alignright | alignjustify | fontsizeselect | forecolor',
          fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
          color_cols: 5
        }}
      />
    </div>
  );
}

export default TextEditorToolbar;