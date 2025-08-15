import { useState } from "react";

export default function useDropdown(){
    const [dropdownAberto, setDropdownAberto] = useState(null);
    const toggleDropDown = (nome) =>{
        setDropdownAberto((prev)=> prev === nome ? null: prev = nome)
    }
    return {dropdownAberto, setDropdownAberto, toggleDropDown}
}