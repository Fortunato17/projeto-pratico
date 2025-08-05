import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

export default function FaleConnoscoPage() {
  return (
    <div>
      <Header />

      <Main>
        <section className="flex flex-col gap-[20px] p-[0px_20px]">
          <div>
            <h1 className="text-[24px] leading-[30px] font-extrabold">
              Fale Connosco
            </h1>
            <p>
              Se tiveres dúvidas, sugestões ou precisares de ajuda com o uso da
              nossa plataforma, é só entrar em contacto connosco. A tua opinião
              é muito importante para que possamos melhorar cada vez mais.
            </p>
          </div>
          <div>
            <h2 className="text-[16px] leading-[24px] font-semibold">
              Tem uma instituição e quer usar o nosso sistema?
            </h2>
            <p>
              Se estás à procura de uma forma mais prática e organizada de gerir
              as filas da tua instituição, fala connosco e solicita já o
              registro no nosso sistema! Transforme a experiência dos seus
              clientes.
            </p>
          </div>
          <h2 className="text-[16px] leading-[24px] font-semibold">
            Junte—se a nós e leve a sua instituição para o digital com segurança
            e inovação.
          </h2>
          <div>
            <h3 className="text-[16px] leading-[24px] font-semibold">
              Canais de Atendimento:{" "}
            </h3>
            <p>Email: appfilas@gmail.com </p>
            <p>whatsApp: +244 944100 756</p>
            <p>Horário de Atendimento: Segunda a Sexta, das 8h às 15h30.</p>
          </div>
          <p>
            Agradecemos pela confiança! Equipa{" "}
            <span className="font-extrabold ">AppFilas</span>.
          </p>
        </section>
      </Main>

      <Footer />
    </div>
  );
}
