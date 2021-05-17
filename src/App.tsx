import React from 'react';
import './App.css';
import UserLookUp from './components/UserLookup';
import { fetchUserProfile } from './service/GitHubApiService';



function App() {
  return (
    <div className="App">
    <UserLookUp/>
    </div>
  );
}

export default App;
