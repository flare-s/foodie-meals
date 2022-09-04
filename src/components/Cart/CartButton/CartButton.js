import React, { useContext } from "react";
import CartIcon from "../CartIcon";
import styles from "./CartButton.module.scss";
import { cartContext } from "../../../store/CartContext";
const CartButton = (props) => {
  const { cartState } = useContext(cartContext);
  const currentCartItems = cartState.items.reduce(
    (accumulator, item) => accumulator + item.amount,
    0
  );
  return (
    <button className={styles.button} onClick={props.closeModal}>
      <CartIcon className={styles.icon} />
      Cart
      <span className={styles.badge}>{currentCartItems}</span>
    </button>
  );
};

export default CartButton;
