import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <ul className="flex gap-5 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <UserButton afterSignOutUrl="/" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
