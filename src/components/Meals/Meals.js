import React, { Fragment } from "react";
import MealsMenu from "./MealsMenu/MealsMenu";
import MealsSummary from "./MealsSummary/MealsSummary";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsMenu />
    </Fragment>
  );
};

export default Meals;
