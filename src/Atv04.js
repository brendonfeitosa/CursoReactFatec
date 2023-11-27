import Avatar from "./Components/JogoMemoria/Avatar";
import ExemploJSX from "./Components/JogoMemoria/ExemploJSX";
import Gallery from "./Components/JogoMemoria/Gallery";
import TodoList from "./Components/JogoMemoria/TodoList";
import { Link } from "react-router-dom";
import "./minhasRotas.css"
import "./Home.css";

const Ativ04 = () => {

    return (
        <>
            <Gallery />
            <ExemploJSX />
            <Avatar />
            <TodoList />
            <Link to="/" className="menu">Retornar para página Inicial</Link>
        </>
    );
}

export default Ativ04;