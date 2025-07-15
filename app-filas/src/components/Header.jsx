import { Children } from "react";

export default function Header({children, ...props}){
    return(
        <div className="w-full p-[20px_20px_40px_20px] bg-[var(--cor-primaria)]"> 
            {children}
        </div>
    )
}