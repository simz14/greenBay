import React, { useState, createContext } from "react";

export const SellingItemsContext = createContext({
  sellingItems: [],
  setSellingItems: () => {},
});

export const SellingItemsProvider = (props) => {
  const [sellingItems, setSellingItems] = useState([]);

  console.log(sellingItems);
  return (
    <SellingItemsContext.Provider
      value={{
        sellingItems,
        setSellingItems,
      }}
    >
      {props.children}
    </SellingItemsContext.Provider>
  );
};
