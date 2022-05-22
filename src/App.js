import './App.css';
import Topbar from './components/Topbar';
import MarkdownArea from './components/MarkdownArea';
import PreviewArea from './components/PreviewArea';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const [atView, setAtView] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="main">
        <MarkdownArea setText={setText} clickCopy={handleClick} />
        <PreviewArea text={text} />
      </div>
      {
        atView ?
          <a href='#prev' className='goprev' onClick={() => setAtView(!atView)}>Markdown</a>
          :
          <a href='#mark' className='goprev' onClick={() => setAtView(!atView)}>Preview</a>
      }
    </div>
  );
}

export default App;
