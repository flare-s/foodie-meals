import React from "react";
import CartIcon from "../CartIcon";
import styles from "./CartButton.module.scss";
const CartButton = () => {
  return (
    <button className={styles.button}>
      <CartIcon className={styles.icon} />
      Cart
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default CartButton;
