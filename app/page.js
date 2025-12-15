"use client";

import { useState } from "react";
import InvoiceForm from "../components/InvoiceForm";
import InvoicePreview from "../components/InvoicePreview";

export default function Home() {
  const [invoice, setInvoice] = useState(null);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>🧾 Invoice Maker</h1>

      <InvoiceForm onCreate={setInvoice} />

      {invoice && <InvoicePreview invoice={invoice} />}
    </main>
  );
}
