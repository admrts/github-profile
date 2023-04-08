import { FC } from "react";
import "./index.css";
import Logo from "../../assets/logo.png";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="header">
      <Image src={Logo} alt="logo" width={40} height={40} />
      <h1>Github Search</h1>
    </header>
  );
};

export default Header;
