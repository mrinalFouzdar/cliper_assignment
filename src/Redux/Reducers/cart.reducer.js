import {
  ADD_TO_CART,
  ADJUST_ITEM_QTY,
  REMOVE_FROM_CART,
} from "../Actions/action.type";

const Initial = {
  cart: [],
};
export const cartReducer = (state = Initial, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      // Check Items is in cart already
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...payload, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: payload.qty } : item
        ),
      };

    default:
      return state;
  }
};
