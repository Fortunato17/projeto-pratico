import Header from "../../components/cliente/Header";
import styles from "../../styles/cliente.module.css";
 export default function HomePage(){
    return(
        <div>
            <div className={styles.headerContainer}>
            <Header/>
            <p className="text-[40px]">Reduza o tempo de <span className="font-bold">ESPERA</span></p>
            <p>Com o AppFilas, entra em filas digitais, acompanha sua posição em tempo real e ganha tempo. Sem precisar estar no local.</p>
            <button>Nova fila</button>
            <button>Consultar</button>
            </div>
        </div>
    );
}
