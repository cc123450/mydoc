import { useEffect, useRef } from 'react'

let idGen = 0;
function nextId(prefix){
  return prefix + idGen++;
}

const mapIdCode = "'map'";

export function CodeViewer({children, height=300}){
  const ref = useRef();
  const mapContainerId = useRef(nextId('map-'));
  useEffect(()=>{
    let script = parseCode();
    return ()=>{
      if(script.parentNode){
        script.parentNode.removeChild(script);
      }
    }
  }, []);

  function parseCode(){
    let code = ref.current.querySelector('pre>code').textContent;
    code = code.replace(/\n/g, '').replace(mapIdCode, `'${mapContainerId.current}'`);
    let script = document.createElement('script');
    script.innerHTML = code;
    ref.current.appendChild(script);
    return script;
  }

  return (
    <div ref={ref}>
      <div style={{ marginTop: '1.5rem' }}>
        {children}
      </div>
      <div id={mapContainerId.current} style={{height,border:'1px solid #000'}}>
      </div>
    </div>
  )
}