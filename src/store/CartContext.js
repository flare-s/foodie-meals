import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let prevTotal = state.items.reduce(
      (acc, cur) => acc + cur.price * cur.value,
      0
    );
    return {
      items: [...state.items, action.payload],
      total: prevTotal + action.payload.price * action.payload.value,
    };
  } else if (action.type === "DELETE") {
    let filteredItems = state.items.filter(
      (item) => item.id !== action.payload
    );
    let value = filteredItems.reduce((acc, cur) => acc + cur.price, 0);
    return {
      items: filteredItems,
      total: value,
    };
  }
  return {
    items: [],
    total: 0,
  };
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
  });

  const onAddItem = (item) => {
    cartDispatch({
      type: "ADD",
      payload: item,
    });
  };

  const onRemoveItem = (id) => {
    cartDispatch({
      type: "ADD",
      payload: id,
    });
  };
  return (
    <cartContext.Provider
      value={{
        cartState,
        onAddItem,
        onRemoveItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
