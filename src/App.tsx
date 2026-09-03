import CreditCard from "./components/credit-card/input";
import Currency from "./components/currency-formatting";
import FromToDate from "./components/from-to-date";
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
      <FromToDate />
      <Currency />
    </div>
  );
}
