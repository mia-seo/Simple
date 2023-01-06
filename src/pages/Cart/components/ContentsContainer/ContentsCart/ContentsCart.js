import React, { useState, useEffect } from 'react';

import SelectContainer from './container/SelectContainer';
import CartItemContainer from './container/CartItemContainer';

import './ContentsCart.scss';

const ContentsCart = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  allCheckedHandeler,
  isAllChecked,
}) => {
  return (
    <div className="contentsCart">
      <h2 className="title">장바구니</h2>
      <SelectContainer
        cartItems={cartItems}
        isAllChecked={isAllChecked}
        allCheckedHandeler={allCheckedHandeler}
      />
      <CartItemContainer
        cartItems={cartItems}
        totalPrice={totalPrice}
        checkedItemHandler={checkedItemHandler}
        isAllChecked={isAllChecked}
      />
      <p className="message">장바구니에 담긴 상품이 없습니다</p>
    </div>
  );
};

export default ContentsCart;
