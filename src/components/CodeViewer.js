import { useEffect, useRef, useState } from 'react'

export function CodeViewer({children}){
  const ref = useRef();
  const [code, setCode] = useState();
  useEffect(()=>{
    console.log(ref.current);
    parseCode();
  }, []);

  function parseCode(){
    let code = ref.current.querySelector('pre>code').textContent;
    code = code.replace(/\n/g, '');
    setCode(code);
  }

  return (
    <div>
      <div ref={ref} style={{ marginTop: '1.5rem' }}>
        {children}
      </div>
      <div id="map" style={{height:300,border:'1px solid #000'}}>
      </div>
      <script>{code}</script>
    </div>
  )
}