import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAmount,
  setProducts,
  decreaseAmount,
  clearCart,
} from "./redux/actions/productActions";
import "./App.css";

// Fetch Data for FakeStore Api - limit to 5 - Done
// Track items in cart
// Keep track of total amounts of products selected
// Add prices together
function App() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const { product, loading } = products;
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === true) {
    return (
      <div>
        <h1>LOADING....</h1>
      </div>
    );
  }

  return (
    <div>
      {console.log(products)}
      {console.log(products.products)}
      {console.log(loading)}
      {/* <h2>CART: {products.cartAmount <= 0 ? 0 : products.cartAmount}</h2> */}
      <h2>CART: {products.cartAmount}</h2>
      <h2>
        Total Amount:{" "}
        {products.cartTotalAmount <= 0 ? 0 : products.cartTotalAmount}
      </h2>

      {products.products.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <h4>$ {item.price}</h4>
            <button onClick={() => dispatch(increaseAmount(index))}>
              Add to cart
            </button>
            <button onClick={() => dispatch(decreaseAmount(index))}>
              Remove from cart
            </button>
          </div>
        );
      })}
      {products.cartCleared === true ? null : (
        <button onClick={() => dispatch(clearCart())}>CLEAR CART</button>
      )}
    </div>
  );
}

export default App;
