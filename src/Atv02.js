import { Link } from "react-router-dom";
import ContadorPessoas from "./Components/ContadorPessoas/ContadorPessoas.jsx";
import "./minhasRotas.css"
import "./Home.css";

export default function Atv02() {
    return (
        
        <div className="contador">
            <h1>Atividade 02</h1>
            <ContadorPessoas />
            <Link to="/" className="menu">Retornar para página Inicial</Link>
        </div>
    );
}

//export default Atv02;
