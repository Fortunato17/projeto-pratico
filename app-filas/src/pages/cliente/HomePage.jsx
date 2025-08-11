// Ícones
import { Banknote, Hospital, Plus, Search, Landmark } from "lucide-react";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Button from "../../components/Button";
import Carrossel from "../../components/cliente/Carrossel";
import CardHome from "../../components/cliente/CardHome";

export default function HomePage() {
  return (
    <div>
      <Header>
        <div className="flex flex-col items-center gap-[10px] text-[var(--cor-branco)]">
          <h1 className="text-[40px] leading-[41px] text-center">
            Reduza o tempo de{" "}
            <span className="font-bold italic">ESPERA</span>
          </h1>
          <p className=" text-center">
            Com o <span className="font-bold ">AppFilas</span>, entra em
            filas digitais, acompanha sua posição em tempo real e ganha tempo.
            Sem precisar estar no local.
          </p>
          <div className="flex flex-col items-center w-full gap-[10px] mt-[10px]">
            <Button variante="novaFila">
              <Plus />
              Nova fila
            </Button>
            <Button variante="consultar">
              <Search />
              Consultar
            </Button>
          </div>
        </div>
      </Header>
      <Main>
        <section className="itemsSection">
          <h2 className="titulo ">
            Somos a sua melhor{" "}
            <span className="font-bold italic">ESCOLHA</span>
          </h2>

          <p>
            Porque seu tempo importa, sua experiência conta e sua tranquilidade
            vale mais. Com o <span className="font-bold ">AppFilas</span>,
            você evita filas, organiza sua rotina e vive com mais liberdade.
            Escolher o melhor não é luxo é inteligência.
          </p>
        </section>
        <Carrossel />

        <section className="itemsSection">
          <h2 className="titulo"><span className="font-bold italic">FILAS</span> online em:</h2>
          <div className="flex flex-col gap-[20px] text-[var(--cor-branco)] text-[24px] ">
            <CardHome
              titulo="Hospitais/Clínicas"
              Icon={Hospital}
              variante="primaria"
            />
            <CardHome titulo="Bancos" Icon={Banknote} variante="primaria" />
            <CardHome
              titulo="Instituições Públicas"
              Icon={Landmark}
              variante="primaria"
            />
            <CardHome variante="primaria">
              <h3 className="text-center">
                Todos <span className="font-bold">locais</span> de atendimento
                ao <span className="font-bold">Público</span>.
              </h3>
            </CardHome>
          </div>
        </section>
        <section className="itemsSection">
          <h2 className="titulo font-bold text-[var(--cor-primaria)]">
            Para Instituições:
          </h2>
          <CardHome variante="secundaria">
            <p>
              Sua instituição/empresa com menos filas, mais eficiência.Junte-se
              ao AppFilas e ofereça uma experiência moderna aos seus clientes.{" "}
              <span className="font-bold italic underline text-[var(--cor-primaria)] cursor-pointer">
                FALE CONNOSCO!
              </span>
            </p>
          </CardHome>
        </section>
      </Main>
      <Footer />
    </div>
  );
}
