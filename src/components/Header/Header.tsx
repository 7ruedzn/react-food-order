import React, { useState } from "react";
import "./Header.module.scss";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import ReactDOM from "react-dom";
import { FaCartPlus, FaUser } from 'react-icons/fa';

const Header = () => {
  const [seeCart, setSeeCart] = useState(false);

  const showCart = () => setSeeCart(true);
  const closeCart = () => setSeeCart(false);

  if (!seeCart) {
    return (
      <header>
        <h1>Vis a Vis</h1>
        <nav>
          <ul>
            <li>Why Fudo?</li>
            <li>Services</li>
            <li>Menu</li>
            <li>About</li>
          </ul>
        </nav>
        <Button icon={<FaCartPlus/>} text="See Cart" onClick={showCart} />
      </header>
    );
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Modal text="carrinhooo" closeModal={closeCart} />,
        document.getElementById("modals") as Element
      )}
      <header>
        <h1>Vis a Vis</h1>
        <Button icon="" text="See cart" onClick={showCart} />
      </header>
    </>
  );
};

export default Header;
