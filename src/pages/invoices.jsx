function Invoices() {
  const invoice = {
    invoiceNo: "INV001",
    date: new Date().toLocaleDateString(),
    customer: "Walk-in Customer",
    total: 360,
  };

  return (
    <div>
      <h1>Invoice</h1>

      <p><strong>Invoice No:</strong> {invoice.invoiceNo}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Customer:</strong> {invoice.customer}</p>

      <hr />

      <h3>Total Amount: ₹{invoice.total}</h3>

      <button onClick={() => window.print()}>
        Print Invoice
      </button>
    </div>
  );
}

export default Invoices;