import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <Fragment>
      <Header openModal={openModal} />
      {isModal && <Cart closeModal={closeModal} />}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
