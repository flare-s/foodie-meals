import React, { useRef, useContext } from "react";
import { cartContext } from "../../../../store/CartContext";
import styles from "./MealItemForm.module.scss";
import Input from "../../../UI/Input/Input";

const MealItemForm = (props) => {
  const valueRef = useRef();
  const { onAddItem } = useContext(cartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    onAddItem({ ...props.meal, value: +valueRef.current.value });
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="amount"
        input={{
          id: `${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          ref: valueRef,
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
