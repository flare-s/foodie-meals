import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal/Modal";
import { cartContext } from "../../store/CartContext";

const Cart = (props) => {
  // const CART_ITEMS = [{ id: "c1", name: "Sushi", amount: 2, price: "13.99" }];
  const { cartState } = useContext(cartContext);
  const cartList = (
    <ul className={styles["cart-items"]}>
      {cartState.items.map((item) => (
        <li key={item.id}>
          {item.name} <span>{item.value}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal closeModal={props.closeModal}>
      <div>
        {cartState.items.length > 0 && cartList}
        <div className={styles.total}>
          <span>Total</span>
          <span>{cartState.total.toFixed(2)}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.button}>Order</button>
          <button className={styles["button--alt"]} onClick={props.closeModal}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
