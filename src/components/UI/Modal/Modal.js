import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeModal}></div>;
};

const ModalContent = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop closeModal={props.closeModal} />,
        document.querySelector("#root")
      )}
      {createPortal(
        <ModalContent>{props.children}</ModalContent>,
        document.querySelector("#modals")
      )}
    </Fragment>
  );
};

export default Modal;
