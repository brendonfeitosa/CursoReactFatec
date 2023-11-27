import { Link } from "react-router-dom";
import Relogio from "./Components/Relogio/Relogio.jsx";
import Letreiro from "./Components/Letreiro/Letreiro.jsx";
import "./Home.css";

function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            { }
            <Letreiro phrase={"Bem vindo a Fatec!"} />
            <Link to="/" className="menu">Retornar para página Inicial</Link>
        </>
    );
}

export default Atv01;
