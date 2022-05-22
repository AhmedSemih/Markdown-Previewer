import React from 'react';

function MarkdownArea({setText,clickCopy}) {

  return (
    <div className='markdown' id="mark">
        <div className="title-area">
        <h3 className='title'>Markdown </h3>
        <i className="fa-solid fa-copy icon" onClick={clickCopy}  />
        </div>     
        <textarea spellCheck="false" className='text-area' onInput={(e)=>setText(e.target.value)} ></textarea>
    </div>
  )
}

export default MarkdownArea;