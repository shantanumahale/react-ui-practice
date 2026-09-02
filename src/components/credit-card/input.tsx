// credit card number, expiry and cvv
// luhn's algorithm for validity

import { useEffect, useState } from "react";

export default function CreditCard() {
  const [creditCard, setCreditCard] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvv, setCvv] = useState<string>();

  const handleCreditCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^0-9]/g, "");
    const truncated = rawInput.slice(0, 16);
    const formatted = truncated.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCreditCard(formatted);
  };

  const handleExpiryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^0-9]/g, "");
    const nativeEvent = e.nativeEvent as InputEvent;
    const isDeleting = nativeEvent.inputType === "deleteContentBackward";
    const len = rawInput.length;
    let formatted = "";
    if (len === 0) {
      formatted = "";
    } else if (len <= 2) {
      formatted = rawInput;
      if (len === 2 && !isDeleting) {
        formatted += "/";
      }
    } else {
      formatted = `${rawInput.slice(0, 2)}/${rawInput.slice(2)}`;
    }
    setExpiry(formatted);
  };

  const isValidExpiry = (expiry: string) => {
    const month = parseInt(expiry.slice(0, 2));
    const year = parseInt(expiry.slice(2));
    if (month < 1 || month > 12) return false;
    if (year < 1900) return false;

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    return year > currentYear || (year === currentYear && month > currentMonth);
  };

  const handleCvvInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^0-9]/g, "");
    setCvv(rawInput);
  };

  useEffect(() => {
    isValidExpiry(expiry);
  }, [expiry]);

  return (
    <div>
      <input
        value={creditCard}
        onChange={handleCreditCardInput}
        type="text"
        maxLength={19}
        placeholder="1234 1234 1234 1234"
      />
      <input
        value={expiry}
        onChange={handleExpiryInput}
        type="text"
        maxLength={5}
        placeholder="01/20"
      />
      <input
        value={cvv}
        onChange={handleCvvInput}
        type="password"
        maxLength={3}
        placeholder="123"
      />
    </div>
  );
}
