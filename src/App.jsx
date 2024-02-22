import { useState } from 'react';
import profilePic from './assets/react.svg'; // Make sure this path is correct
import './App.css';
import logo from './assets/png/logo-no-background.png';
import { CSSTransition } from 'react-transition-group';
import backimage from './assets/back.jpg'

function App() {
  // State to manage the visibility of the communities list
  const [showCommunities, setShowCommunities] = useState(false);
  
  const Communities = ['GDSC DDU', 'IETE DDU', 'CSI DDU'];

  // Function to toggle the visibility of the communities list
  const toggleCommunities = () => {
    setShowCommunities(!showCommunities);
  };

  return (
    <div className="app">
      <div className="top-bar">
        <img src={logo} width='120px' height='80px'/>
        <div className="profile">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
      <div className="content">
        <div className="left-bar">
          <ul>
            <li>Blog Sections</li>
            <li onClick={toggleCommunities} style={{cursor: 'pointer'}}>Communities
              <CSSTransition
                in={showCommunities}
                timeout={500}
                classNames="communities"
                unmountOnExit
              >
                <ul>
                  {Communities.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </CSSTransition>
            </li>

          </ul>
        </div>
        <div className="right-panel">
          {/* Content will be shown here based on selection from the left bar */}
          THIS IS RIGHT
        </div>
      </div>
    </div>
  );
}

export default App;
