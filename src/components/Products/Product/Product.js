import React from "react";
import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.img_url}
        alt={product.name}
      />

      <div className={styles.product__details}>
        <div className={styles.product_name_price}>
          <p className={styles.details__title}>{product.name}</p>
          <p className={styles.details__price}>$ {product.final_price}.00</p>
        </div>

        <p className={styles.details__desc}>{product.description}</p>
      </div>

      <div className={styles.product__buttons}>
        <button
          style={{ width: "100%" }}
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
