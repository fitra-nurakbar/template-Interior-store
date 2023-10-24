import CartAndSearch from "./CartAndSearch";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="flex w-full p-5 gap-[72px]">
      <Logo />
      <ul className="flex gap-12 font-normal">
        <li className="font-semibold">Home</li>
        <li>Products</li>
        <li>FAQ</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="ml-auto flex gap-6">
        <CartAndSearch />
      </div>
    </div>
  );
}
