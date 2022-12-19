import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="pa2">
            < input
                className="tc br3 pa3 bw2 b--light-blue bg-washed-green grow dib"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;