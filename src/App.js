import './App.css';
import Topbar from './components/Topbar';
import MarkdownArea from './components/MarkdownArea';
import PreviewArea from './components/PreviewArea';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="main">
        <MarkdownArea></MarkdownArea>
        <PreviewArea></PreviewArea>
      </div>
    </div>
  );
}

export default App;
