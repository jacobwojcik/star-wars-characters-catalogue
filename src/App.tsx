import React,{useState} from 'react';
import './assets/App.css';
import { List } from "./components/List/List"
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [searchedCharacter, setSearchedCharacter] = useState("");

  const searchFor = (value:string) => {
    let search = value.toLowerCase();
    setSearchedCharacter(search);
    console.log(searchedCharacter);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters Catalogue</h1>
        <SearchBar 
          searchedCharacter = {searchedCharacter} 
          searchFor = {searchFor}
          />
        <List 
        searchedCharacter = {searchedCharacter}
        />
      </header>
    </div>
  );
}

export default App;
