import React, { useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./common/header/Header"


import Cart from "./common/cart/Cart"
import Footer from "./common/footer/Footer"


function App() {

  //Step 1 :


  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Header CartItem={CartItem} />
      <Routes>
        {/* pages 자리 */}
        <Route path='/cart' element={ <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} /> } exact />
      </Routes>
      <Footer />
    </>
  )
}

export default App