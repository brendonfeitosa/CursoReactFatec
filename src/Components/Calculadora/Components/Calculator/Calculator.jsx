import React, { useState } from "react";
import Display from "../Visor/Visor";
import Button from "../Button/index";
import "../CSS/style.css";


const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('');

  const handleButtonClick = (button) => {
    // Lógica para tratar os cliques nos botões
    let novoValor = currentInput;

    switch (button) {
      case '=':
        novoValor = definirResutado(novoValor);
        break;
      case 'C':
        novoValor = '0';
        break;
      case '+/-':
        novoValor = (parseFloat(novoValor) * -1).toString();
        break;
      case '%':
        novoValor = (parseFloat(novoValor) / 100).toString();
        break;
      case '←':
        novoValor = novoValor.slice(0, -1);
        break;
      default:


        // Se um número é pressionado após uma operação, limpar o visor
        if (['+', '-', '*', '/'].includes()) {
          novoValor += button;
        } else {
          // Caso contrário, adicionar ao valor existente
          novoValor = currentInput === '0' ? button : novoValor + button;
        }
    }

    setCurrentInput(novoValor);
  };

  const definirResutado = (expression) => {
    try {
      return eval(expression).toString();
    } catch (error) {
      return 'Erro';
    }
  };
  const botoes = [
    'C', ' +/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', '←',
  ];

  return (
    <div className="calculadora">
      <input type="text" value={currentInput} readOnly />
      <div className="button-container">
        {botoes.map((botao, index) => (
          <button key={index} onClick={() => handleButtonClick(botao)}>
            {botao}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

