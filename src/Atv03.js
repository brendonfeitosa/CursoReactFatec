import Calculator from "./Components/Calculadora/Components/Calculator/Calculator";
import Button from "./Components/Calculadora/Components/Button/index";
import Display from "./Components/Calculadora/Components/Visor/Visor";
import {Link} from "react-router-dom";


function Atv03(){
    return(
        <>
         <h1> Calculadora </h1>
         <Calculator/>
         
         <br />
         <div className="container">
            <Link to="/" className="menu">Retornar para página Inicial</Link>
         </div>
         
        </>
    )
}
export default Atv03;
