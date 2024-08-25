import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourate food here</h2>
        <p>
          Choose form a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your craving and elevate your dining experience,
          one delicious meal at a time
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
