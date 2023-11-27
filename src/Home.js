import React from "react";
import { Link } from "react-router-dom";
import "../src/Home.css"

//() => é a sintax de aron function
const Home = () => {
    return (
        <div>
            
            <h1>Página Inicial</h1>
            <nav>
                <Link to="/Atv01" className="menu">Atividade 01</Link>
                <br /><br />
                <Link to="/Atv02" className="menu">Atividade 02</Link>
                <br /><br />
                <Link to="/Atv03" className="menu">Atividade 03</Link>
                <br /><br />
                <Link to="/Atv04" className="menu">Atividade 04</Link>
                <br /><br />
            </nav>
        </div>
    );
}

export default Home;