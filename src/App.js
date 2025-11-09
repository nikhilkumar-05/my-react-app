import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';  // Removed unused import
import React,{ useState } from 'react';


// import About from './components/About';
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(11, 60, 52)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

 return (
    <>

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />



      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" mode={mode} />
      </div>
    </>
  );
}

// function App() {
//   const [mode, setMode] = useState('dark  '); // Whether dark mode is enabled or not
//   const toggleMode =()=>{
//     if(mode==='light'){
//       setMode('dark');
//       document.body.style.backgroundColor = 'black';
//       document.body.style.color = "white";
//     }
//     else{
//       setMode('light  ');
//       document.body.style.backgroundColor = "white"; 
//       document.body.style.color = "black";
//     }
//   }
//   return (
//     <>
//       <Navbar title="Text"aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
//       <div className="container my-3">
//         <TextForm heading="Enter text here to analyze" />   
//       {/* <About/> */}
//       </div>
//     </>
//   );
// }


export default App;
