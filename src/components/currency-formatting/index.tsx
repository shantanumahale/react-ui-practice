import { useState } from "react";

export default function Currency() {
  const [rupee, setRupee] = useState<string>("");
  const [dollar, setDollar] = useState<string>("");

  const handleRupeeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInputReversed = e.target.value
      .replace(/[^0-9]/g, "")
      .split("")
      .reverse()
      .join("");

    const len = rawInputReversed.length;

    let formatted = "";

    if (len <= 3) {
      formatted = rawInputReversed;
    } else if (len > 3 && len < 6) {
      formatted =
        rawInputReversed.slice(0, 3) + "," + rawInputReversed.slice(3);
    } else if (len >= 6 && len < 8) {
      formatted =
        rawInputReversed.slice(0, 3) +
        "," +
        rawInputReversed.slice(3, 5) +
        "," +
        rawInputReversed.slice(5);
    } else if (len >= 8) {
      formatted =
        rawInputReversed.slice(0, 3) +
        "," +
        rawInputReversed.slice(3, 5) +
        "," +
        rawInputReversed.slice(5, 7) +
        "," +
        rawInputReversed.slice(7);
    }
    formatted = formatted.split("").reverse().join("");

    setRupee(formatted);
  };

  const handleDollarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInputReversed = e.target.value
      .replace(/[^0-9]/g, "")
      .split("")
      .reverse()
      .join("");
    let formatted = rawInputReversed.replace(/(\d{3})(?=\d)/g, "$1,");
    formatted.split("").reverse().join("");
    setDollar(formatted);
  };

  return (
    <div>
      <input
        value={rupee}
        onChange={handleRupeeInput}
        type="text"
        inputMode="numeric"
        placeholder="₹2,00,00,000"
      />
      <input
        value={dollar}
        onChange={handleDollarInput}
        type="text"
        inputMode="numeric"
        placeholder="$20,000,000"
      />
    </div>
  );
}
