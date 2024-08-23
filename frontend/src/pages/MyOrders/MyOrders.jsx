import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import "./MyOrders.css";

import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data && Array.isArray(response.data.data)) {
        setData(response.data.data);
      } else {
        setData([]); // Set to empty array if the response is not as expected
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      setData([]); // Set to empty array on error
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, itemIndex) => {
                  return itemIndex === order.items.length - 1
                    ? item.name + " x " + item.quantity
                    : item.name + " x " + item.quantity + ", ";
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))
        ) : (
          <p>No orders found.</p> // Show a message if there are no orders
        )}
      </div>
    </div>
  );
};

export default MyOrders;
