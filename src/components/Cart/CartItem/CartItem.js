import React, { useContext } from "react";
import styles from "./CartItem.module.scss";
import { cartContext } from "../../../store/CartContext";
const CartItem = (props) => {
  const { price, name, amount, id } = props.item;
  const ModifiedPrice = `$${price.toFixed(2)}`;
  const { onAddItem, onRemoveItem } = useContext(cartContext);

  const onAddCartItem = (item) => {
    onAddItem({ ...item, amount: 1 });
  };

  const onRemoveCartItem = (id) => {
    onRemoveItem(id);
  };
  return (
    <li className={styles["cart-item"]}>
      <div>
        <p>{name}</p>
        <div className={styles.summary}>
          <span className={styles.price}>{ModifiedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onRemoveCartItem(id)}>−</button>
        <button onClick={() => onAddCartItem(props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
