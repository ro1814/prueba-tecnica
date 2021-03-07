import React from 'react';

const SearchBar = ({input:keyword,onChange:setKeyword}) => {
  const BarStyling = {width:"50%",background:"#F2F1F9", border:"groove", padding:"0.5rem"};
  return (
    <>
    <input 
     style={BarStyling}
     key="ramdon1"
     value={keyword}
     placeholder={"Busque una fruta..."}
     onChange={(e) => setKeyword(e.target.value)}
    />
    <hr/>
    </>
    
    
  );
}

export default SearchBar
