import Calculadora from "./Components/Calculadora";
import { Link } from "react-router-dom";
import "./minhasRotas.css"
import "./Home.css";

export default function Ativ03() {
    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <Calculadora />
            <Link to="/" className="menu">Retornar para página Inicial</Link>
        </div>
    );
}
