
import { Children } from "react";
import Nav from "./Nav";

export default function Header({ children, ...props }) {
  return (
    <div className=" text-[var(--cor-branco)]  w-full p-[20px_20px_40px_20px]  bg-[var(--cor-primaria)]">
      <div className="container flex flex-col gap-[40px]">
        <Nav />
        {children}
      </div>
    </div>
  );
}
