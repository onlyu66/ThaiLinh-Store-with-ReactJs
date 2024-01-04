import React, { useEffect } from "react";
import { Input } from "antd";
import OnFocus from "./OnFocus";

function Search({
  searchInput,
  setSearchInput,
  searchedKey,
  setSearchedKey,
  products,
  dispatch,
  searchProducts,
  isDivVisible,
  setDivVisible,
  handleSubmit,
}) {
  useEffect(() => {
    dispatch(searchProducts(searchInput));
    const storedSearchedKey = localStorage.getItem("searchedKey");
    if (storedSearchedKey) {
      setSearchedKey(JSON.parse(storedSearchedKey));
    }
  }, [dispatch]);

  const handleInputFocus = () => {
    setDivVisible(true);
  };

  return (
    <div>
      <Input
        size="large"
        placeholder="Hôm nay bạn cần gì?"
        className="searchInput"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onFocus={handleInputFocus}
      />
      {isDivVisible ? (
        <div className="absolute z-10 bg-white top-14 rounded-lg" style={{width:"540px"}}>
          <OnFocus
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchedKey={searchedKey}
            setSearchedKey={setSearchedKey}
            products={products}
            dispatch={dispatch}
            searchProducts={searchProducts}
            setDivVisible={setDivVisible}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Search;
