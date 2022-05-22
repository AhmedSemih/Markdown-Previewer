import React from 'react';
import 'github-markdown-css/github-markdown-light.css';
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function PreviewArea({ text }) {

    //Download as Markdown
    const onClickSave = () => {
        const anchor = document.createElement('a');
        const blob = new Blob([text], { type: 'text' });
        const fileUrl = URL.createObjectURL(blob);
        anchor.setAttribute('href', fileUrl);
        anchor.setAttribute('download', 'markdown.md');
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    return (
        <div className='preview' id='prev'>
            <div className="title-area">
                <h3 className='title'>Preview</h3>
                <i class="fa-solid fa-file-arrow-down icon" onClick={onClickSave}></i>
            </div>
            <div className='text-area markdown-body'>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {text}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default PreviewArea;