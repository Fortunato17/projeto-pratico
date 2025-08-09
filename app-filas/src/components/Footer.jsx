import { Globe, Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[5px] bg-[var(--cor-verde-escuro)] text-[var(--cor-branco)] p-[40px_20px] text-[14px] ">
      <div className="flex items-center gap-[5px]">
        <Mail size="20px" strokeWidth={1.5}/> appfilas@gmail.com
      </div>
      <div className="flex items-center gap-[5px]">
        <PhoneCall size="20px" strokeWidth={1.5} />
        944100756</div>
      <div className="flex items-center gap-[5px] cursor-pointer">
        <Globe size="20px" strokeWidth={1.5}/>
        appfilas.ao</div>
      <div className="bg-[var(--cor-fundo-claro)] h-[0.5px]"></div>
      <div>© 2025 AppFilas. Todos os direitos reservados.</div>
    </div>
  );
}
