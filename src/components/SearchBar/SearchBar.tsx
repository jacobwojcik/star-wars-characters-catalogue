import React from "react";
import  "./searchbar.css";

type SearchProps = {
    searchedCharacter:string,
    searchFor:Function,
  }

const SearchBar = (
    { searchedCharacter, searchFor }:SearchProps
    ) => {
  return (
    <>
      <form  onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for your favorite character"
          value={searchedCharacter}
          onChange={(e) => searchFor(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchBar;