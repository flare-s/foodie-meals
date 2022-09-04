import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../CartIcon";
import styles from "./CartButton.module.scss";
import { cartContext } from "../../../store/CartContext";
const CartButton = (props) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const btnClass = `${styles.button} ${isAnimated ? styles.bump : ""}`;
  const { cartState } = useContext(cartContext);

  useEffect(() => {
    if (cartState.items.length < 1) return;

    setIsAnimated(true);

    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartState.items]);

  const currentCartItems = cartState.items.reduce(
    (accumulator, item) => accumulator + item.amount,
    0
  );
  return (
    <button className={btnClass} onClick={props.closeModal}>
      <CartIcon className={styles.icon} />
      Cart
      <span className={styles.badge}>{currentCartItems}</span>
    </button>
  );
};

export default CartButton;
