import React from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "./style";

const SearchInput = ({ setSearchParams }) => {
  const onChange = (e) => {
    const title = e.target.value;
    if (title) {
      setSearchParams({ title });
    } else {
      setSearchParams({});
    }
  };
  return (
    <Container>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="Search" onChange={onChange} />

          <div className="searchIcon">
            <FaSearch />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SearchInput;
