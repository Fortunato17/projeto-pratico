import { useEffect, useState } from "react";
import { CarrosselItems } from "./CarrosselItems";

export default function Carrossel() {
  const [item, setItem] = useState(0);
  useEffect(() => {
    const intevalo = setInterval(() => {
      setItem((prev) => (prev === CarrosselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(intevalo);// limpa o anterior sempre que item mudar
  }, [item]);// item muda → reinicia o intervalo

  return (
    <div className="flex flex-col gap-[10px] m-[-20px]">
      <ul className="relative h-[700px] overflow-hidden flex items-center justify-center">
        {CarrosselItems.map((slide, index) => {
          const classeBase = `absolute h-full duration-700 ease-in-out`;
          return (
            <li
              key={index}
              className={`${classeBase} ${
                item === index ? "opacity-100 " : "opacity-0 "
              }`}
            >
              {slide.card}
            </li>
          );
        })}
      </ul>

      <ul className="flex justify-center gap-[10px]">
        {CarrosselItems.map((_, index) => (
          <li
            key={index}
            onClick={() => setItem(index)}
            className={`w-4 h-4 rounded-full border-[1.5px] border-solid border-[var(--cor-primaria)] ${
              index === item
                ? "bg-[var(--cor-primaria)]  cursor-auto"
                : ""
            }   cursor-pointer`}
          ></li>
        ))}
      </ul>
    </div>
  );
}
