import React from "react";
import { Input } from "semantic-ui-react";

const SearchBox = ({ placeholder, handleChange }) => (
  <Input
    style={{ marginBottom: "30px", marginTop: "10px" }}
    icon="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
