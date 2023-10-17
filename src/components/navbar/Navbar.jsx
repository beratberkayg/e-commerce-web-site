import React from "react";
import NavbarLeft from "./navbaritem/NavbarLeft";
import NavbarRight from "./navbaritem/NavbarRight";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
