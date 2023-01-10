import React from 'react';

import './SelectContainer.scss';

const SelectContainer = ({
  cartItems,
  isAllChecked,
  allCheckedHandler,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  const checkHandler = ({ target }) => {
    allCheckedHandler(target.checked); //true or false
  };

  const selectedDelete = () => {
    setCartItems(cartItems.filter(item => !checkedItems.has(item.cartItemId)));
    setCheckedItems(new Set());

    const query = [...checkedItems].map(itemId => `itemId=${itemId}`).join('&');
    fetch(`http://10.58.52.240:3000/cart?${query}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI',
      },
    });
  };

  return (
    <div className="selectContainer">
      <input
        className="checkAll"
        type="checkbox"
        checked={isAllChecked}
        onChange={e => checkHandler(e)}
      />
      {console.log(isAllChecked)}
      <div className="selectAll">
        전체선택({checkedItems.size}/{cartItems.length})
      </div>
      <button className="selectedDelete" type="button" onClick={selectedDelete}>
        선택삭제
      </button>
    </div>
  );
};

export default SelectContainer;
