import { useEffect, useRef, useState } from "react";

export default function useDropdown() {
  const [dropdownAberto, setDropdownAberto] = useState(null);
  const toggleDropDown = (nome) => {
    setDropdownAberto((prev) => (prev === nome ? null : (prev = nome)));
  };
  const dropRef = useRef(null);
  useEffect(() => {
    function handleClickFora(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdownAberto(null);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, [setDropdownAberto]);
  return { dropdownAberto, setDropdownAberto, toggleDropDown, dropRef };
}
