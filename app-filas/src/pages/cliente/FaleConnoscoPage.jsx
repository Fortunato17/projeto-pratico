//Componentes
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function FaleConnoscoPage() {
  return (
    <div>
      <Header />

      <Main>
        <section className="flex flex-col gap-[20px]">
          <div>
            <h1 className="tituloBold">Fale Connosco</h1>
            <p>
              Se tiveres dúvidas, sugestões ou precisares de ajuda com o uso da
              nossa plataforma, é só entrar em contacto connosco. A tua opinião
              é muito importante para que possamos melhorar cada vez mais.
            </p>
          </div>
          <div>
            <h2 className="subTitulo font-bold">
              Tem uma instituição e quer usar o nosso sistema?
            </h2>
            <p>
              Se estás à procura de uma forma mais prática e organizada de gerir
              as filas da tua instituição, fala connosco e solicita já o
              registro no nosso sistema! Transforme a experiência dos seus
              clientes.
            </p>
          </div>
          <h3 className="font-bold">
            Junte—se a nós e leve a sua instituição para o digital com segurança
            e inovação.
          </h3>
          <div>
            <h3 className="font-bold">Canais de Atendimento: </h3>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Email:</span> appfilas@gmail.com
              </li>
              <li>
                <span className="font-semibold">WhatsApp:</span> +244 944 100
                756
              </li>
              <li>
                <span className="font-semibold">Horário de Atendimento:</span>{" "}
                Segunda a Sexta, das 8h às 15h20.
              </li>
            </ul>
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
