import React, { useContext } from "react";
import styles from "./CartItem.module.scss";
import { cartContext } from "../../../store/CartContext";
const CartItem = (props) => {
  const { price, name, value, id } = props.item;
  const ModifiedPrice = `$${price.toFixed(2)}`;
  const { onAddItem } = useContext(cartContext);

  const onAddCartItem = (item) => {
    onAddItem({ ...props.item, value: 1 });
  };
  return (
    <li className={styles["cart-item"]}>
      <div>
        <p>{name}</p>
        <div className={styles.summary}>
          <span className={styles.price}>{ModifiedPrice}</span>
          <span className={styles.amount}>x {value}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>−</button>
        <button onClick={() => onAddCartItem(props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
