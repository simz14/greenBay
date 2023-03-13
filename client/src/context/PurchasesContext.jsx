import React, { useState, createContext } from "react";

export const PurchasesContext = createContext({
  purchases: [],
  setPurchases: () => {},
});

export const PurchasesProvider = (props) => {
  const [purchases, setPurchases] = useState([]);

  return (
    <PurchasesContext.Provider
      value={{
        purchases,
        setPurchases,
      }}
    >
      {props.children}
    </PurchasesContext.Provider>
  );
};
