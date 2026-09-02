import { useEffect, useState } from "react";

export default function ContactDetails() {
  const [indiaMobile, setIndiaMobile] = useState<string>("");
  const [indiaLandline, setIndiaLandline] = useState<string>("");

  const [usPhone, setUsPhone] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const handleIndiaMobileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^0-9]/g, "");
    setIndiaMobile(rawInput);
  };

  const handleIndiaLandlineInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^0-9]/g, "");
    const formatted = rawInput.replace(/^(\d{3})(\d)/g, "$1 $2");
    setIndiaLandline(formatted);
  };

  const handleUsPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    const len = rawInput.length;
    const nativeEvent = e.nativeEvent as InputEvent;
    const isDeleting = nativeEvent.inputType === "deleteContentBackward";

    let formatted = "";
    if (len === 0) {
      formatted = "";
    } else if (len <= 3) {
      formatted = `(` + rawInput;
      if (len === 3 && !isDeleting) {
        formatted += `)`;
      }
    } else if (len <= 6) {
      formatted = `(` + rawInput.slice(0, 3) + `)` + rawInput.slice(3);
      if (len === 6 && !isDeleting) {
        formatted += "-";
      }
    } else {
      formatted =
        `(` +
        rawInput.slice(0, 3) +
        `)` +
        rawInput.slice(3, 6) +
        "-" +
        rawInput.slice(6);
    }
    setUsPhone(formatted);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;
    setEmail(rawInput);
  };

  const isValidEmail = (email: string) => {
    const regex = /^[A-Za-z0-9._%+-]+\@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    console.log(isValidEmail(email));
  }, [email]);

  return (
    <div>
      <input
        value={indiaMobile}
        onChange={handleIndiaMobileInput}
        type="text"
        maxLength={10}
        placeholder="9876543210"
      />
      <input
        value={indiaLandline}
        onChange={handleIndiaLandlineInput}
        type="text"
        maxLength={12}
        placeholder="011 12345678"
      />
      <input
        value={usPhone}
        onChange={handleUsPhoneInput}
        type="text"
        maxLength={13}
        placeholder="(123)456-7890"
      />
      <input
        value={email}
        onChange={handleEmailInput}
        type="email"
        placeholder="abc@def.com"
      />
    </div>
  );
}
