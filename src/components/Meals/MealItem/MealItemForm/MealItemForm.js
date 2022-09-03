import React from "react";
import styles from "./MealItemForm.module.scss";
import Input from "../../../UI/Input/Input";
const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
