import React, { useState, createContext } from "react";

export const PurchasesContext = createContext({
  pruchases: [],
  setPruchases: () => {},
});

export const PurchasesProvider = (props) => {
  const [pruchases, setPurchases] = useState([]);

  return (
    <PurchasesContext.Provider
      value={{
        pruchases,
        setPurchases,
      }}
    >
      {props.children}
    </PurchasesContext.Provider>
  );
};
