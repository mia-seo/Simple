import { ProductCard } from '../../components/productCard/ProductCard';
import './productList.scss';

export const ProductList = ({ items }) => {
  return (
    <div className="productList">
      <div className="products">
        {items.map(items => (
          <ProductCard key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};
