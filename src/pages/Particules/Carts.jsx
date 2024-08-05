// src/components/Cart.jsx
import React from "react";
import "../styles/Project.css";
import Button from '@mui/material/Button';

const Cart = ({ text, buttonText, image }) => {
  return (
    <div className="Cart">
      <div className="ImgContainer">
        <img src={image} alt="" className="GenderLogo" />
      </div>

      <section className="text">
        {text.map((segment, index) => (
          <span key={index} style={{ fontWeight: segment.bold ? 'bold' : 'normal' }}>
            {segment.content}
          </span>
        ))}
      </section>

      <Button
        variant="contained"
        sx={{
          width: "70%",
          height: "45px",
          color: "white",
          backgroundColor: "white",
          border: "2px",
          color: "black",
          border: "1px black solid"
        }}
        className="ButtonsCV"
      >
       {buttonText}
      </Button>
    </div>
  );
};

export default Cart;
