import React from 'react';

function Topbar() {
  return (
    <nav className='topbar'>
      <ul>
        <li >Markdown Previewer</li>
        <a className='right' rel="noreferrer" href='https://www.markdownguide.org/basic-syntax/' target="_blank" >
          Syntax
          <i class="fa-solid fa-circle-question"></i>
        </a>
      </ul>
    </nav>
  )
}

export default Topbar;