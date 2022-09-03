import React from "react";
import CartIcon from "../CartIcon";
import styles from "./CartButton.module.scss";
const CartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.closeModal}>
      <CartIcon className={styles.icon} />
      Cart
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default CartButton;
