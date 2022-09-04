import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // Get the index of an item that has the same id
    let elementInArrayIndex = state.items.findIndex(
      (meal) => meal.id === action.payload.id
    );
    let currentState = state.items;
    let itemToAdd = action.payload;
    // If an element with the same id exists
    if (elementInArrayIndex !== -1) {
      // Remove the element from the copied state
      currentState = currentState.filter((item) => item.id !== itemToAdd.id);
      // Calculate the new amout by adding the old amount with the new one
      let newAmount =
        state.items[elementInArrayIndex].amount + action.payload.amount;
      // Change the amount to the total of the old and new amount
      itemToAdd = { ...itemToAdd, amount: newAmount };
    }

    return {
      items: [...currentState, itemToAdd],
      total: state.total + action.payload.price * action.payload.amount,
    };
  }
  if (action.type === "DELETE") {
    // Get the index of an item that has the same id
    let elementInArrayIndex = state.items.findIndex(
      (meal) => meal.id === action.payload
    );
    // Get the element to decrease its amount
    let itemToRemove = state.items[elementInArrayIndex];
    // Make an array without that element
    let filteredItems = state.items.filter(
      (item) => item.id !== action.payload
    );
    // If the amount is bigger than one decrease it by one and put it in the filtered array
    if (state.items[elementInArrayIndex].amount > 1) {
      filteredItems = [
        ...filteredItems,
        { ...itemToRemove, amount: itemToRemove.amount - 1 },
      ];
    }
    //Calculate the new total
    let totalAfterRemovalOfTheOldAmount = filteredItems.reduce(
      (accumulator, item) => accumulator + item.price * item.amount,
      0
    );
    return {
      items: filteredItems,
      total: totalAfterRemovalOfTheOldAmount,
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
      type: "DELETE",
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
