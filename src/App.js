import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MealsSummary />
      </main>
    </Fragment>
  );
}

export default App;
