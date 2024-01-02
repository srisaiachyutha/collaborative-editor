import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco";
import { useParams, useSearchParams } from 'react-router-dom';

export const usercolors = [
  '#30bced',
  '#6eeb83',
  '#ffbc42',
  '#ecd444',
  '#ee6352',
  '#9ac2c9',
  '#8acb88',
  '#1be7ff'
];

function MonacoEditors() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const editorRef = useRef(null);
    const myColor = usercolors[Math.floor(Math.random() * usercolors.length)];
    const documentName = id;
    const roomName = id;
    const userName = `user${Math.floor(Math.random() * 10000)}`;
  
    let passwordValue = 'empty';

    if(searchParams.get('password') !== null){
        passwordValue = searchParams.get('password') || 'empty'
    }

    console.log(`logging the documentName: ${documentName} and roomName: ${roomName}`);

    function handleEditorDidMount(editor, monaco) {
      console.log('logging editor', editor);
      console.log('logging monaco', monaco)

      
      // creating custom theme
      // monaco.editor.defineTheme("myTheme", {
      //   base: "vs",
      //   inherit: true,
      //   rules: [],
      //   colors: {
      //     "editor.foreground": "#000000",
      //     "editor.background": "#EDF9FA",
      //     "editorCursor.foreground": "#FF0000",
      //     "editorCursor.background": "#FF0000",
      //     "editor.lineHighlightBackground": "#0000FF20",
      //     "editorLineNumber.foreground": "#008800",
      //     "editor.selectionBackground": "#88000030",
      //     "editor.inactiveSelectionBackground": "#88000015",
      //   },
      // });
      //monaco.editor.setTheme("myTheme");
      
      
      

      editorRef.current = editor;
      const doc = new Y.Doc();
      const provider = new WebrtcProvider(roomName, doc, {
        password : passwordValue
      }); 
      const awareness = provider.awareness;
      const type = doc.getText(documentName); 
      const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), awareness);
      
    //   awareness.setLocalStateField('user', { name: userName, color: myColor });
    //   awareness.on('change', () => {
    //     // Map each awareness state to a dom-string
    //     const strings = []
    //     awareness.getStates().forEach(state => {
    //       console.log(state)
    //       if (state.user) {
    //         strings.push(`<div style="color:${state.user.color};">• ${state.user.name}</div>`)
    //       }
          
    //     })
    //   });

      // for handling the cursor position change
    //   editor.onDidChangeCursorPosition((e,i,m) => {
    //     console.log('consoling e',e);
    //     if(awareness)
    //     awareness.setLocalStateField('user', { name: userName, color: myColor, cursor: e.position });
    //   });
                     
    }

    return (
        <div className="App">
          <Editor 
            defaultValue="sample text"
            height="90vh"
            width="90vw" 
            onMount={handleEditorDidMount}
            theme="vs-dark"
          />;
        </div>
      )
  }
  
  export default MonacoEditors;
   