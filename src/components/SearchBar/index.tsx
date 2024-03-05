import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

interface SearchBarProps {
  search: string;
  setSearch: any;
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="search-bar" onClick={handleClick}>
      <FaSearch />
      <input
        ref={inputRef}
        placeholder="Search"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;
