import { useState } from "react";

function OrderScreen() {
  const menuItems = [
    { id: 1, name: "Chicken Biryani", price: 180 },
    { id: 2, name: "Mutton Biryani", price: 250 },
    { id: 3, name: "Egg Biryani", price: 140 },
    { id: 4, name: "Veg Biryani", price: 120 },
    { id: 5, name: "Tea", price: 15 },
    { id: 6, name: "Coffee", price: 20 },
    { id: 7, name: "Coke", price: 40 },
    
  ];

  const [orders, setOrders] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [invoiceNo, setInvoiceNo] = useState(1);
  const [showInvoice, setShowInvoice] = useState(false);

  const addItem = (item) => {
    const existing = orders.find((o) => o.id === item.id);

    if (existing) {
      setOrders(
        orders.map((o) =>
          o.id === item.id
            ? { ...o, qty: o.qty + 1 }
            : o
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

  const increaseQty = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id
          ? { ...o, qty: o.qty + 1 }
          : o
      )
    );
  };

  const decreaseQty = (id) => {
    setOrders(
      orders
        .map((o) =>
          o.id === id
            ? { ...o, qty: o.qty - 1 }
            : o
        )
        .filter((o) => o.qty > 0)
    );
  };

  const total = orders.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const generateInvoice = () => {
    if (orders.length === 0) {
      alert("Add items first");
      return;
    }

    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }

    setShowInvoice(true);
  };

  const newOrder = () => {
    setOrders([]);
    setPaymentMethod("");
    setShowInvoice(false);
    setInvoiceNo(invoiceNo + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Restaurant Billing System</h1>

      {!showInvoice && (
        <>
          <h2>Menu</h2>

          {menuItems.map((item) => (
            <div key={item.id}>
              {item.name} - ₹{item.price}

              <button
                onClick={() => addItem(item)}
                style={{ marginLeft: "10px" }}
              >
                Add
              </button>
            </div>
          ))}

          <hr />

          <h2>Current Order</h2>

          {orders.length === 0 ? (
            <p>No items selected</p>
          ) : (
            orders.map((item) => (
              <div key={item.id}>
                {item.name}

                <button
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>

                {" "}₹{item.price * item.qty}
              </div>
            ))
          )}

          <h3>Total: ₹{total}</h3>

          <hr />

          <h2>Payment Method</h2>

          <button
            onClick={() =>
              setPaymentMethod("Cash")
            }
          >
            Cash
          </button>

          <button
            onClick={() =>
              setPaymentMethod("UPI")
            }
            style={{ marginLeft: "10px" }}
          >
            UPI
          </button>

          <p>Selected: {paymentMethod}</p>

          {paymentMethod === "UPI" && (
            <div>
              <h3>UPI QR CODE HERE</h3>
            </div>
          )}

          <button
            onClick={generateInvoice}
          >
            Generate Invoice
          </button>
        </>
      )}

      {showInvoice && (
        <div>
          <h1>Invoice</h1>

          <p>
            <strong>
              Invoice No:
            </strong>{" "}
            INV{invoiceNo}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date().toLocaleString()}
          </p>

          <hr />

          {orders.map((item) => (
            <p key={item.id}>
              {item.name} x {item.qty}
            </p>
          ))}

          <h2>Total: ₹{total}</h2>

          <p>
            Payment: {paymentMethod}
          </p>

          <button
            onClick={() => window.print()}
          >
            Print Invoice
          </button>

          <button
            onClick={newOrder}
            style={{ marginLeft: "10px" }}
          >
            New Order
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderScreen;