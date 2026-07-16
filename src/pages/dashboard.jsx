import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

function Dashboard() {
  const [todayOrders, setTodayOrders] = useState(0);
  const [todayRevenue, setTodayRevenue] = useState(0);
  const [mostOrderedItem, setMostOrderedItem] = useState("");
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/orders");

      const orders = response.data;

      // Today's Orders
      const today = new Date().toDateString();

      const todayData = orders.filter(
        (order) =>
          new Date(order.createdAt).toDateString() === today
      );

      setTodayOrders(todayData.length);

      // Today's Revenue
      const revenue = todayData.reduce(
        (sum, order) => sum + order.total,
        0
      );

      setTodayRevenue(revenue);

      // Most Ordered Item
      const itemCount = {};

      orders.forEach((order) => {
        order.items.forEach((item) => {
          if (itemCount[item.name]) {
            itemCount[item.name] += item.qty;
          } else {
            itemCount[item.name] = item.qty;
          }
        });
      });

      let mostItem = "";
      let maxQty = 0;

      for (const item in itemCount) {
        if (itemCount[item] > maxQty) {
          maxQty = itemCount[item];
          mostItem = item;
        }
      }

      setMostOrderedItem(`${mostItem} (${maxQty})`);

      // Recent Orders
      const latestOrders = [...orders]
        .sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        )
        .slice(0, 5);

      setRecentOrders(latestOrders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <h1>👑 Owner Dashboard</h1>
        <p>Restaurant Billing System</p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "250px",
              background: "#16a34a",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h3>📦 Today's Orders</h3>
            <h1>{todayOrders}</h1>
          </div>

          <div
            style={{
              width: "250px",
              background: "#2563eb",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h3>💰 Today's Revenue</h3>
            <h1>₹{todayRevenue}</h1>
          </div>

          <div
            style={{
              width: "250px",
              background: "#f59e0b",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h3>🏆 Most Ordered Item</h3>
            <h2>{mostOrderedItem}</h2>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            background: "white",
            color: "black",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2>📋 Recent Orders</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                <th style={{ padding: "10px" }}>Time</th>
                <th style={{ padding: "10px" }}>Items</th>
                <th style={{ padding: "10px" }}>Total</th>
                <th style={{ padding: "10px" }}>Payment</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order._id}
                  style={{ borderBottom: "1px solid #ddd" }}
                >
                  <td style={{ padding: "10px" }}>
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>

                  <td style={{ padding: "10px" }}>
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item.name} × {item.qty}
                      </div>
                    ))}
                  </td>

                  <td style={{ padding: "10px" }}>
                    ₹{order.total}
                  </td>

                  <td style={{ padding: "10px" }}>
                    {order.paymentMethod}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;