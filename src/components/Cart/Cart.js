import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let final_price = 0;

    cart.forEach((item) => {
      items += item.qty;
      final_price += item.qty * item.final_price;
    });

    setTotalItems(items);
    setTotalPrice(final_price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        <Link to="/">
          <h4 className={styles.order_list}> {"<-"} Back to home </h4>
        </Link>
  <h3 className={styles.order_list}>Order Summsry ({totalItems}items)</h3>
        <ol>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ol>

        <Link to="/">
          <p>+Add more items</p>
        </Link>
      </div>

      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Price Details</h4>

        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>PLACE ORDER</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
