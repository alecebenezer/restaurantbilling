function PaymentModal({ total }) {
  return (
    <div>
      <h2>Payment</h2>

      <p>Total Amount: ₹{total}</p>

      <button>Cash Payment</button>

      <button>UPI Payment</button>
    </div>
  );
}

export default PaymentModal;