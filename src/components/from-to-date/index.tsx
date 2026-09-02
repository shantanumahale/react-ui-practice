import { useState } from "react";

export default function FromToDate() {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        min={today}
      />
      <input
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        min={from || today}
      />
    </div>
  );
}
