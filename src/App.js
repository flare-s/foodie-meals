import React, { useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartContext";

function App() {
  const [isModal, setIsModal] = useState(false);

  const openModal = useCallback(() => {
    setIsModal(true);
  }, []);

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <CartProvider>
      <Header openModal={openModal} />
      {isModal && <Cart closeModal={closeModal} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
