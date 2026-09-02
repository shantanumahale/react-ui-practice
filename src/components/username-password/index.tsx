import { useState, useEffect } from "react";

export default function UsernamePassword() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordScore, setPasswordScore] = useState<
    "WEAK" | "MEDIUM" | "STRONG" | "NONE"
  >("NONE");

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedInput = e.target.value.replace(/[^A-Za-z0-9_-]{3,16}/g, "");
    setUsername(sanitizedInput);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const passwordStrengthCalculator = (password: string) => {
    let score = 0;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasSpecialCase = false;
    let hasNumbers = false;

    if (password.length > 8) score += 10;
    for (const c of password) {
      if (c >= "A" && c <= "Z") hasUpperCase = true;
      if (c >= "a" && c <= "z") hasLowerCase = true;
      if (c >= "0" && c <= "9") hasNumbers = true;
    }
    if (/[^A-Za-z0-9]/.test(password)) hasSpecialCase = true;

    if (hasUpperCase) score += 10;
    if (hasLowerCase) score += 10;
    if (hasNumbers) score += 10;
    if (hasSpecialCase) score += 10;

    return score;
  };

  useEffect(() => {
    if (!password) {
      setPasswordScore("NONE");
      return;
    }
    const score = passwordStrengthCalculator(password);
    if (score > 40) setPasswordScore("STRONG");
    else if (score > 20 && score <= 40) setPasswordScore("MEDIUM");
    else setPasswordScore("WEAK");
  }, [password]);

  return (
    <div>
      <input
        value={username}
        onChange={handleUsernameInput}
        minLength={3}
        maxLength={16}
        type="text"
      />
      <input value={password} type="password" onChange={handlePasswordInput} />
      {passwordScore}
    </div>
  );
}
