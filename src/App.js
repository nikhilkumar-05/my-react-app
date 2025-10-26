import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm' ;

function App() {
  return (
    <>
      <Navbar title="Text" aboutText="About Textutils" />
      <div className="container my-3r ">
      <TextForm heading ="Enter text here"/>
      </div>
    </>
  );
}

export default App;
 











