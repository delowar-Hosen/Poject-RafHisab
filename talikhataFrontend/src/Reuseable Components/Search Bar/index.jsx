import React from "react";

const SearchBar = ({ placHolder, className }) => {
  return (
    <div>
      <input placeholder={placHolder} className={className} />
    </div>
  );
};

export default SearchBar;
