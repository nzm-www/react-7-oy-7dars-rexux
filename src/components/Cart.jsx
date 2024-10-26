import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  function handledel(id) {
    dispatch({ type: "REMOV", payload: id });
  }

  return (
    <div>
      {cart.length > 0 &&
        cart.map(function (value) {
          return (
            <div>
              <h2>{value.name}</h2>
              <h2>{value.lastname}</h2>
              <h2>{value.company}</h2>
              <h2>{value.job}</h2>
              <h2>{value.email}</h2>
              <h2>{value.phone}</h2>
              <button onClick={() => handledel(value.id)}>Remov</button>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
