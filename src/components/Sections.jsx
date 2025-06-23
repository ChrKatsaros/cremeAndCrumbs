import React from 'react';
import './sections.css';
import productsData from './productsData';
import ProductsCard from './ProductsCard';

function Sections() {
  return (
    <>
      <section id="baked-goods" className="menu-section">
        <h2>
          {' '}
          <span class="circle-sketch-highlight">Baked </span> Goods
        </h2>
        <div className="menu-section-products">
          {productsData.bakedGoods.map((product) => (
            <ProductsCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section id="drinks-coffee" className="menu-section">
        <h2>
          {' '}
          <span class="circle-sketch-highlight">Drinks </span>& Coffee
        </h2>
        <div className="menu-section-products">
          {productsData.drinksCoffee.map((product) => (
            <ProductsCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section id="cakes-sweets" className="menu-section">
        <h2>
          <span class="circle-sketch-highlight">Cakes </span> & Sweets
        </h2>
        <div className="menu-section-products">
          {productsData.cakesSweets.map((product) => (
            <ProductsCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Sections;
