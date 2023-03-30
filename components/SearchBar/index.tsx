"use client";
import { FC, useState, ChangeEvent } from "react";
import "./index.css";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar: FC = () => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = () => {};

  return (
    <div className="search-wrapper">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Username"
          onChange={handleChange}
          value={value}
        />
        <button onClick={handleClick}>
          <AiOutlineSearch className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
