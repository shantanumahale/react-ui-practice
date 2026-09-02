import React, { useState } from "react";

export default function PanAadhaarInputFields() {
  const [pan, setPan] = useState<string>("");
  const [aadhaar, setAadhaar] = useState<string>("");
  const [dob, setDob] = useState<string>("");

  const handlePanInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");

    let formatted = "";
    for (let i = 0; i < 10; i++) {
      if (i < 5) {
        if (/[A-Z]/.test(input[i])) formatted += input[i];
      } else if (i < 9) {
        if (/[0-9]/.test(input[i])) formatted += input[i];
      } else {
        if (/[A-Z]/.test(input[i])) formatted += input[i];
      }
    }
    setPan(formatted);
  };
  const handleAadhaarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, "");
    const truncated = input.slice(0, 12);
    const formatted = truncated.replace(/(\d{4})(?=\d)/g, "$1 ");
    setAadhaar(formatted);
  };
  const handleDobInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
  };

  return (
    <div>
      <input
        value={pan}
        onChange={handlePanInput}
        type="text"
        maxLength={10}
        placeholder="AABP1234C"
        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
      />
      <input
        value={aadhaar}
        onChange={handleAadhaarInput}
        type="text"
        inputMode="numeric"
        maxLength={14}
        placeholder="1234 1234 1234"
      />
      <input
        value={dob}
        onChange={handleDobInput}
        type="text"
        maxLength={10}
        placeholder="01/01/1970"
        pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}"
      />
    </div>
  );
}
