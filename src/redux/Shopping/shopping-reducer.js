import { product } from "prelude-ls";
import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
   {
        "id": 1,
        "name": "food card",
        "description": "This card is used for spending on Food merchants",
        "final_price": 21,
        "original_price": 30,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"
    },
    {
        "id": 2,
        "name": "travel card",
        "description": "This card is used for spending on Travel and hotel bookings",
        "final_price": 20,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png"
    },
    {
        "id": 3,
        "name": "epic card",
        "description": "Use this card and get benefits on every transaction",
        "final_price": 40,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png"
    },
    {
        "id": 4,
        "name": "happay premium card",
        "description": "Use this card and get benefits on every transaction",
        "final_price": 40,
        "img_url": "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png"
    }
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //  Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
        
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
      
        ...state,
        
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
