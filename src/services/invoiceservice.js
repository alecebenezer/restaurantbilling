let invoices = [];

// Save invoice

export const saveInvoice = (invoice) => {
  invoices.push(invoice);
};

// Get all invoices

export const getInvoices = () => {
  return invoices;
};

// Get invoice by ID

export const getInvoiceById = (invoiceId) => {
  return invoices.find(
    (invoice) => invoice.invoiceId === invoiceId
  );
};

// Delete invoice

export const deleteInvoice = (invoiceId) => {
  invoices = invoices.filter(
    (invoice) => invoice.invoiceId !== invoiceId
  );
};