import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import MenuCard from "../components/menucard";

import chickenBiryani from "../assets/chicken.jpg";
import muttonBiryani from "../assets/mutton.jpg";
import vegBiryani from "../assets/veg.jpg";

import teaImg from "../assets/tea.jpg";
import coffeeImg from "../assets/coffee.jpg";
import cokeImg from "../assets/coke.jpg";

const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 180,
    image: chickenBiryani,
  },
  {
    id: 2,
    name: "Mutton Biryani",
    price: 250,
    image: muttonBiryani,
  },
  {
    id: 3,
    name: "Egg Biryani",
    price: 140,
    image: chickenBiryani,
  },
  {
    id: 4,
    name: "Veg Biryani",
    price: 120,
    image: vegBiryani,
  },
  {
    id: 5,
    name: "Tea",
    price: 15,
    image: teaImg,
  },
  {
    id: 6,
    name: "Coffee",
    price: 20,
    image: coffeeImg,
  },
  {
    id: 7,
    name: "Coke",
    price: 40,
    image: cokeImg,
  },
];

function Menu() {
  const [orders, setOrders] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  const addToOrder = (item) => {
    const existing = orders.find(
      (order) => order.id === item.id
    );

    if (existing) {
      setOrders(
        orders.map((order) =>
          order.id === item.id
            ? { ...order, qty: order.qty + 1 }
            : order
        )
      );
    } else {
      setOrders([
        ...orders,
        {
          ...item,
          qty: 1,
        },
      ]);
    }
  };

  const total = orders.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const newOrder = () => {
    setOrders([]);
    setPaymentMethod("");
    setShowInvoice(false);
  };

  const generateInvoice = async () => {
    if (orders.length === 0) {
      alert("Add items first");
      return;
    }

    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/orders", {
        items: orders,
        total: total,
        paymentMethod: paymentMethod,
      });

      alert("Order saved successfully!");
      setShowInvoice(true);
    } catch (error) {
      console.error(error);
      alert("Failed to save order");
    }
  };

  if (showInvoice) {
    return (
      <div>
        <h1>Invoice</h1>

        {orders.map((item) => (
          <p key={item.id}>
            {item.name} x {item.qty} = ₹{item.price * item.qty}
          </p>
        ))}

        <h2>Total: ₹{total}</h2>

        <p>Payment Method: {paymentMethod}</p>

        <button onClick={() => window.print()}>
          Print Invoice
        </button>

        <button onClick={newOrder}>
          New Order
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Restaurant Billing System</h1>

      <h2>Menu</h2>

      {menuItems.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          addToOrder={() => addToOrder(item)}
        />
      ))}

      <hr />

      <h2>Current Order</h2>

      {orders.length === 0 ? (
        <p>No items selected</p>
      ) : (
        orders.map((item) => (
          <p key={item.id}>
            {item.name} x {item.qty} = ₹{item.price * item.qty}
          </p>
        ))
      )}

      <h3>Total: ₹{total}</h3>

      <hr />

      <h2>Payment Method</h2>

      <button onClick={() => setPaymentMethod("Cash")}>
        Cash
      </button>

      <button onClick={() => setPaymentMethod("UPI")}>
        UPI
      </button>

      <p>Selected: {paymentMethod}</p>

      {paymentMethod === "UPI" && total > 0 && (
        <div>
          <h3>Scan & Pay</h3>

          <QRCodeCanvas
            value={`upi://pay?pa=alecebenezer@okicici&pn=Restaurant&am=${total}&cu=INR`}
            size={220}
          />

          <p>UPI ID: alecebenezer@okicici</p>
          <p>Amount: ₹{total}</p>
        </div>
      )}

      <button onClick={generateInvoice}>
        Generate Invoice
      </button>
    </div>
  );
}

export default Menu;