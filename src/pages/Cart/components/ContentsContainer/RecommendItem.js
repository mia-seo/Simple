import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendItem.scss';

const RecommendItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClickItem = () => {
    navigate(`/details/${item.id}`);
  };

  return (
    <div className="recommendItem" onClick={handleClickItem}>
      <a href="">
        <img className="thumbnailImg" src={item.thumbnail} alt="" />
      </a>
      <div className="description">
        <div className="name">{item.product_name}</div>
        <div className="price">{item.price}원</div>
      </div>
    </div>
  );
};

export default RecommendItem;
