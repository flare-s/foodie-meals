import React from "react";
import styles from "./MealsMenu.module.scss";
const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsMenu = () => {
  const mealsList = MEALS.map((meal) => <li key={meal.d}>{meal.name}</li>);
  return (
    <section className={styles.meals}>
      <h2>Menu</h2>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default MealsMenu;
