import Image from "next/image";
import Link from "next/link";
import logo from "../public/TechLine.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-purple-600 pt-3">
        <div className="flex-1 justify-end h-16">
          <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
