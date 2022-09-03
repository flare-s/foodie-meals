import React from "react";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = (props) => {
  const { id, name, description, price } = props.meal;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
