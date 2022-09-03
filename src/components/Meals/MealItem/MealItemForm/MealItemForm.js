import React from "react";
import styles from "./MealItemForm.module.scss";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <div>
        <label id="amount">Amount</label>
        <input htmlFor="amount" type={"number"} min="1" max="10" />
      </div>
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
