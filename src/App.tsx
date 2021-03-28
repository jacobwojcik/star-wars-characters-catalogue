import React from 'react';
import './assets/App.css';
import { List } from "./components/List/List"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters Catalogue</h1>
        <List/>
      </header>
    </div>
  );
}

export default App;
