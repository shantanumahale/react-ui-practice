import CreditCard from "./components/credit-card/input";
import ContactDetails from "./components/mobile-telephone-email";
import PanAadhaarInputFields from "./components/pan_aadhaar_dob";
import UsernamePassword from "./components/username-password";

export default function App() {
  return (
    <div>
      <UsernamePassword />
      <PanAadhaarInputFields />
      <CreditCard />
      <ContactDetails />
    </div>
  );
}
