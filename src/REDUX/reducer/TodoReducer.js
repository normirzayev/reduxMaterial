import { Type } from "../actions/ActionTypes";
const initialState = {
  list: JSON.parse(localStorage.getItem("data")) || [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.add:
      const { data } = payload;
      if (localStorage.getItem("data")) {
        localStorage.setItem("data", JSON.stringify([...state.list, data]));
      } else {
        localStorage.setItem("data", JSON.stringify([data]));
      }
      return {
        ...state,
        list: JSON.parse(localStorage.getItem("data")),
      };
    case Type.edit:
      const { inputData } = payload;
      localStorage.setItem(
        "data",
        JSON.stringify(
          state.list.map((val) => (val.id === inputData.id ? inputData : val))
        )
      );
      return {
        ...state,
        list: JSON.parse(localStorage.getItem("data")),
      };
    case Type.del:
      localStorage.setItem(
        "data",
        JSON.stringify(state.list.filter((val) => val.id !== payload))
      );
      return {
        ...state,
        list: JSON.parse(localStorage.getItem("data")),
      };

    case Type.cartAdd:
      if (localStorage.getItem("cart")) {
        if (state.cart.filter((val) => val.id === payload.id).length === 0) {
          localStorage.setItem(
            "cart",
            JSON.stringify([
              ...state.cart,
              { ...payload, soni: payload.soni + 1 },
            ])
          );
        }
      } else {
        localStorage.setItem("cart", JSON.stringify([{ ...payload, soni: 1 }]));
      }
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };

    case Type.cartPlus:
      localStorage.setItem(
        "cart",
        JSON.stringify(
          state.cart.map((item) =>
            item.id == payload.id
              ? { ...payload, soni: payload.soni + 1 }
              : item
          )
        )
      );

      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };

    case Type.cartMinus:
      localStorage.setItem(
        "cart",
        JSON.stringify(
          state.cart.map((item) =>
            item.id === payload.id && payload.soni > 1
              ? { ...payload, soni: payload.soni - 1 }
              : item
          )
        )
      );
      
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };

    case Type.cartRemove:
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.filter((val) => val.id !== payload))
      );
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
      };
    default:
      return state;
  }
};

export default TodoReducer;
