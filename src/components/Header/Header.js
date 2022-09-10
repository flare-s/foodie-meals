import React, { Fragment, memo } from "react";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton/CartButton";
import styles from "./Header.module.scss";
const Header = (props) => {
  console.log("header runinng!");
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Foodie Meals</h1>
        <CartButton openModal={props.openModal} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default memo(Header);
