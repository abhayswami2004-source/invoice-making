"use client";

import { useState } from "react";

export default function InvoiceForm({ onCreate }) {
  const [client, setClient] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const total = Number(price) * Number(quantity);

    onCreate({
      client,
      item,
      price,
      quantity,
      total,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: "#fff", padding: "1rem", maxWidth: "400px" }}
    >
      <h3>Create Invoice</h3>

      <input placeholder="Client Name" required onChange={(e) => setClient(e.target.value)} />
      <input placeholder="Item Description" required onChange={(e) => setItem(e.target.value)} />
      <input type="number" placeholder="Price" required onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" required onChange={(e) => setQuantity(e.target.value)} />

      <button type="submit">Generate Invoice</button>
    </form>
  );
}
