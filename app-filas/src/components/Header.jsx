import { Children } from "react";
import Nav from "./Nav";

export default function Header({children, ...props}){
    return(
        <div className="w-full p-[20px_20px_40px_20px] bg-[var(--cor-primaria)]"> 
            <Nav/>
            {children}
        </div>
    )
}