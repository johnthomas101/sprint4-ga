import React from 'react';
import logo from './logo.svg'; // image import
import './App.css'; // css import

import SearchBar from './components/SearchBar/SearchBar';
import MainHeader from './components/MainHeader/MainHeader';
import Results from './components/Results/Results';
import ClassComponent from './components/ClassComponent/ClassComponent';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SearchBar></SearchBar>
      <Results></Results>
      {/* <Results></Results> */}
      {/* <ClassComponent></ClassComponent> */}
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
