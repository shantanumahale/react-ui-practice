import CreditCard from "./components/credit-card/input";
import PanAadhaarInputFields from "./components/pan_aadhaar_dob";
import UsernamePassword from "./components/username-password";

export default function App() {
  return (
    <div>
      <UsernamePassword />
      <PanAadhaarInputFields />
      <CreditCard />
    </div>
  );
}
