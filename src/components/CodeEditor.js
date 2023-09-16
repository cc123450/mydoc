import { useEffect, useRef, useState } from "react"
import styles from "./codeeditor.module.css"
import "codemirror/lib/codemirror.css"

const defaultCode = `
<div>hello world</div>
`

export default function CodeEditor(){
    let textareaRef = useRef();
    let codeMirrorRef = useRef();
    let [code, setCode] = useState(defaultCode);

    useEffect(()=>{
        if(!codeMirrorRef.current){
            // 必须在此引入，否则会报错 navigator not defined
            const CodeMirror = require("codemirror");
            let editor = codeMirrorRef.current =  CodeMirror.fromTextArea(textareaRef.current, {lineNumbers:true});
            editor.on('change', function(){
                setCode(editor.getValue());
            });
        }
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <textarea ref={textareaRef} defaultValue={defaultCode}>
            </textarea>
            <iframe className={styles['ce-preview']} srcDoc={code}></iframe>
        </div>
    )
}