// Calculate total bill

export const calculateTotal = (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

// Calculate GST

export const calculateGST = (amount) => {
  return amount * 0.05; // 5%
};

// Final Amount

export const calculateFinalAmount = (items) => {
  const subtotal = calculateTotal(items);
  const gst = calculateGST(subtotal);

  return {
    subtotal,
    gst,
    total: subtotal + gst,
  };
};