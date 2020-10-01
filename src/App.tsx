import React from 'react';

import './App.css';
import MissionContainer from './components /Mission /index'
import MissionList from './components /misisoninfo';


const App = () =>{


    const [id, setId] = React.useState(42);
    const handleIdChange = React.useCallback(newId => {
      setId(newId);
    }, []);
 
  return (
    <div className="App">
     <MissionContainer handleIdChange={handleIdChange}/>
    <MissionList id={id} />
    </div>
  );
}

export default App;
