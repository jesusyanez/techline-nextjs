import Image from "next/image";
import Link from "next/link";
import logo from "../public/TechLine.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-primary">
        <div className="flex-1 justify-end">
          <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
