import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function PreviewArea() {
  return (
    <div className='preview'>
        <h3 className='title'>Preview</h3>
        <div className='text-area'>
            <ReactMarkdown>
                # Hello
            </ReactMarkdown>
        </div>
    </div>
  )
}

export default PreviewArea;