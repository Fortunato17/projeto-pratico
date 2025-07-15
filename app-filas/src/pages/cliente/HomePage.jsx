import { Banknote, Hospital, Plus, Search, Landmark } from "lucide-react";
import Nav from "../../components/Nav";
import styles from "../../styles/cliente.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  HeaderButton1,
  HeaderButton2,
} from "../../components/cliente/ClienteButton";
import Carrossel from "../../components/cliente/Carrossel";
export default function HomePage() {
  return (
    <div>
      <Header>
        <Nav />

        <div className="flex flex-col items-center gap-[10px] mt-[40px] text-[var(--cor-branco)]">
          <h1 className="text-[40px] leading-[41px] text-center">
            Reduza o tempo de{" "}
            <span className="font-extrabold italic">ESPERA</span>
          </h1>
          <p className=" text-center">
            Com o <span className="font-extrabold ">AppFilas</span>, entra em
            filas digitais, acompanha sua posição em tempo real e ganha tempo.
            Sem precisar estar no local.
          </p>
          <div className="flex flex-col items-center w-full gap-[10px] mt-[10px]">
            <HeaderButton1>
              <Plus />
              Nova fila
            </HeaderButton1>
            <HeaderButton2>
              <Search />
              Consultar
            </HeaderButton2>
          </div>
        </div>
      </Header>

      {/*#####################################################################*/}

      <main className="p-[40px_0px_80px_0px] flex flex-col gap-[80px]">
        <section className="flex flex-col gap-[10px] p-[0px_20px]">
          <h1 className="text-[24px] leading-[30px] ">
            Somos a sua melhor{" "}
            <span className="font-extrabold italic">ESCOLHA</span>
          </h1>

          <p>
            Porque seu tempo importa, sua experiência conta e sua tranquilidade
            vale mais. Com o <span className="font-extrabold ">AppFilas</span>,
            você evita filas, organiza sua rotina e vive com mais liberdade.
            Escolher o melhor não é luxo é inteligência.
          </p>
        </section>
        <Carrossel />

        <section className="flex flex-col gap-[10px] p-[0px_20px] font-medium">
          <h1 className="text-[24px] leading-[20px] ">FILAS online em:</h1>
          <div className="flex flex-col gap-[20px] text-[var(--cor-branco)] text-[24px] ">
            <div className="flex flex-col items-center justify-center rounded-[10px] p-[20px] h-[190px] bg-[var(--cor-primaria)] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
              <h2 className="text-center">Hospitais/Clínicas</h2>
              <Hospital size={48} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center justify-center rounded-[10px] p-[20px] h-[190px] bg-[var(--cor-primaria)] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
              <h2 className="text-center">Bancos</h2>
              <Banknote size={48} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center justify-center rounded-[10px] p-[20px] h-[190px] bg-[var(--cor-primaria)] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
              <h2 className="text-center">Instituições Públicas</h2>
              <Landmark size={48} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center justify-center rounded-[10px] p-[20px] h-[190px] bg-[var(--cor-primaria)] shadow-[0px_2px_6px_0.5px_rgba(0,0,0,0.25)]">
              <h2 className="text-center font-normal">
                Todos <span className="font-extrabold">locais</span> de
                atendimento ao <span className="font-extrabold">Público.</span>
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-[10px] p-[0px_20px]">
            <h2 className="text-[20px] font-extrabold text-[var(--cor-primaria)]">
              Para Instituições:
            </h2>

            <div className="flex items-center text-left rounded-[10px] border-[1px] border-solid border-[var(--cor-primaria)] p-[20px] h-[190px] bg-[var(--cor-branco)] shadow-[0px_2px_6px_0.5px_rgba(0,0,0,0.25)]">
              <p>
                Sua instituição/empresa com menos filas, mais
                eficiência.Junte-se ao AppFilas e ofereça uma experiência
                moderna aos seus clientes.{" "}
                <span className="font-bold italic underline text-[var(--cor-primaria)] cursor-pointer">
                  FALE CONNOSCO!
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/*#####################################################################*/}
      <Footer />
    </div>
  );
}
