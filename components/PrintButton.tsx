"use client";

export default function PrintButton() {
  return (
    <button className="print-btn" type="button" onClick={() => window.print()}>
      Print / Save
    </button>
  );
}
