let orders = [];

// Get all orders
export const getOrders = () => {
  return orders;
};

// Add new order
export const addOrder = (order) => {
  orders.push(order);
};

// Delete order
export const removeOrder = (orderId) => {
  orders = orders.filter((order) => order.id !== orderId);
};

// Clear all orders
export const clearOrders = () => {
  orders = [];
};