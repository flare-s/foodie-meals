import React from "react";
import styles from "./MealsMenu.module.scss";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
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
  const mealsList = MEALS.map((meal) => <MealItem meal={meal} key={meal.id} />);
  return (
    <section className={styles.meals}>
      <h2>Menu</h2>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsMenu;
