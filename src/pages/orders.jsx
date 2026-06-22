import { useState } from "react";

function Orders() {
  const [orders] = useState([
    {
      id: 1,
      item: "Chicken Biryani",
      qty: 2,
      total: 360,
    },
  ]);

  return (
    <div>
      <h1>Orders</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.item}</td>
              <td>{order.qty}</td>
              <td>₹{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;