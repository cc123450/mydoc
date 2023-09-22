import { useEffect, useRef, useState } from "react"
import styles from "./codeeditor.module.css"
import "codemirror/lib/codemirror.css"

export default function CodeEditor({defaultCode=''}){
    let textareaRef = useRef();
    let codeMirrorRef = useRef();
    let [code, setCode] = useState(defaultCode);
    let [hideCode, setHideCode] = useState(false);

    useEffect(()=>{
        if(!codeMirrorRef.current){
            // 必须在此引入，否则会报错 navigator not defined
            const CodeMirror = require("codemirror");
            let editor = codeMirrorRef.current =  CodeMirror.fromTextArea(textareaRef.current, {lineNumbers:true});
            editor.setSize('100%', '100%');
        }
    }, [])

    useEffect(()=>{
        if(textareaRef.current){
            let textareaPanel = textareaRef.current.closest("."+styles['ce-textarea']);
            if(hideCode){
                textareaPanel.classList.add(styles['hide'])
            }else{
                textareaPanel.classList.remove(styles['hide'])
            }
        }
    }, [hideCode]);

    function toggleTextarea(){
        setHideCode(!hideCode);
    }

    function run(){
        if(codeMirrorRef.current){
            setCode(codeMirrorRef.current.getValue());
        }
    }

    function restore(){
        if(codeMirrorRef.current){
            setCode(defaultCode);
        }
    }

    return (
        <div className="flex flex-row w-full h-screen">
            <div className={["relative w-1/3 h-full border-r-2 whitespace-nowrap", styles["ce-textarea"]].join(' ')}>
                <div className="flex flex-row justify-between m-2.5 overflow-hidden">
                    <h4>源码编辑器</h4>
                    <div className="grid gap-4 grid-cols-2">
                        <button onClick={run}>运行</button>
                        <button onClick={restore}>刷新</button>
                    </div>
                </div>
                <textarea ref={textareaRef} defaultValue={code} className="w-full h-full">
                </textarea>
                <div onClick={toggleTextarea}
                     className="absolute flex items-center justify-center cursor-pointer
                     border-y-2 border-r-2 rounded-r-lg
                     bg-white h-16 w-8 right-0 inset-y-1/2 
                     -translate-y-1/2 translate-x-full">
                    {hideCode?<span>&gt;</span>:<span>&lt;</span>}
                </div>
            </div>
            <iframe className="border-0 w-2/3" srcDoc={code}></iframe>
        </div>
    )
}