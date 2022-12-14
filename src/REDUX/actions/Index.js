import { Type } from "../actions/ActionTypes";
export const addList = (malumot) => {
  return {
    type: Type.add,
    payload: {
      data: { ...malumot, id: new Date().getTime() },
    },
  };
};

export const editData = (inputData) => {
  return {
    type: Type.edit,
    payload: { inputData },
  };
};

export const delFunc = (id) => {
  return {
    type: Type.del,
    payload: id,
  };
};

export const cartAdd = (cartData) => {
  return {
    type: Type.cartAdd,
    payload: cartData,
  };
};

export const cartPlusFunc = (cartData) => {
  return {
    type: Type.cartPlus,
    payload: cartData,
  };
};
export const cartMinusFunc = (cartData) => {
  return {
    type: Type.cartMinus,
    payload: cartData,
  };
};


export const cartRemoveFunc = (id) => {
  return {
    type:Type.cartRemove,
    payload:id
  }
}