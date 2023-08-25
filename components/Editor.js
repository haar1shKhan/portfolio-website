import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const Editor = ({value,setdescription}) => {
    const editorConfiguration = {
        toolbar: [ 'bold', 'italic','link' ,'numberedList', 'bulletedList','undo', 'redo', ],
        
       
      };
  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        setdescription(data);
        // const outputDiv = document.querySelector('.lol');
        // outputDiv.innerHTML = data;
      }}
    />
  );
};

export default Editor;