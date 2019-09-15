import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Team from './components/Team'
function App() {
  const [newTeam, setNewTeam] = useState([{}])
  const addMember = (newMember) => {
    setNewTeam([...newTeam, newMember])
  }

  return (
    <div className="App">
      <header className = 'App-header'>
        <h1>Team</h1>
        <Team newTeam = {newTeam} setNewTeam = {setNewTeam}/>
        <Form addMember = {addMember} />
        <button onClick = {addMember}>Edit</button>
      </header>
    </div>
  );
}

export default App;
