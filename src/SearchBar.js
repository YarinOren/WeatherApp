import React, { useState } from 'react';

   function SearchBar(props) {

       const {onSearch} = props;
       const [searchText, setSearchText] = useState("");

       const handleInput = (e) => {
           const text = e.target.value;
           setSearchText(text);
       };

       const handleEnterKeyPressed = (e) => {
           if(e.key === "Enter") {
               onSearch(searchText);
           }
       }

        const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

        return (
            <div>
                <input 
                    className="input"
                    type="text"
                    style={BarStyling}
                    placeholder="London"
                    onChange={handleInput}
                    onKeyPress={handleEnterKeyPressed}
                />
            </div>
           );
   }

  export default SearchBar;