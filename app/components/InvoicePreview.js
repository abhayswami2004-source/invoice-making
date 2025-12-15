export default function InvoicePreview({ invoice }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "1rem",
        maxWidth: "400px",
        marginTop: "1rem",
      }}
    >
      <h3>Invoice Preview</h3>

      <p><strong>Client:</strong> {invoice.client}</p>
      <p><strong>Item:</strong> {invoice.item}</p>
      <p><strong>Price:</strong> ${invoice.price}</p>
      <p><strong>Quantity:</strong> {invoice.quantity}</p>

      <hr />
      <h2>Total: ${invoice.total}</h2>
    </div>
  );
}
