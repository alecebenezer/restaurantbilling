function Billing() {
  const total = 360;

  return (
    <div>
      <h1>Billing</h1>

      <p>Order Total: ₹{total}</p>

      <button>Generate Invoice</button>
    </div>
  );
}

export default Billing;