import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  const { price, name, value, id } = props.item;
  const ModifiedPrice = `$${price.toFixed(2)}`;

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
        <button onClick={() => props.onRemove(id)}>−</button>
        <button onClick={() => props.onAdd(props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
