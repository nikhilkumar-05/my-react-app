import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';  // Removed unused import

function App() {
  return (
    <>
      <Navbar title="Text" aboutText="About Textutils" />
      <div className="container my-3">
        {/* <TextForm heading="Enter text here to analyze" /> */}  {/* Uncomment if needed */}
        <About />
      </div>
    </>
  );
}

export default App;
