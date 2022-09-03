import React from "react";
import styles from "./Cart.module.scss";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const CART_ITEMS = [{ id: "c1", name: "Sushi", amount: 2, price: "13.99" }];
  const cartList = (
    <ul className={styles["cart-items"]}>
      {CART_ITEMS.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal closeModal={props.closeModal}>
      <div>
        {cartList}
        <div className={styles.total}>
          <span>Total</span>
          <span>27.98</span>
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
