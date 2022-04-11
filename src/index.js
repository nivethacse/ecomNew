import React from 'react';
import ReactDOM from 'react-dom';
import "@fontsource/dm-sans";
import './index.css';
import App from './App';
import ProductProvider from './context/ProductContext'
import FilterProvider from './context/FilterContext';
import CartProvider from './context/CartContext';

ReactDOM.render(
  <ProductProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductProvider>,
  document.getElementById('root')
);

