"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          manuFacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
