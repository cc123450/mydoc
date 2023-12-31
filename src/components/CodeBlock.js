import React from 'react'
import {Tabs} from 'nextra/dist/components'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
export default ({children, className, live}) => {
  console.log('code block', className, live);
  const language = className.replace(/language-/, '')
  if (live) {
    return (
      <div style={{marginTop: '40px'}}>
        <LiveProvider code={children}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}