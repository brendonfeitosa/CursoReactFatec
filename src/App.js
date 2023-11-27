import logo from './logo.svg';
import './App.css';
import Watch from "./Components/Relogio/Relogio.jsx";
import AnimatedPhrase from './Components/Letreiro/AnimatedPhrase.jsx';
import ContadorPessoas from './Components/ContadorPessoas/ContadorPessoas';

function App() {
  return (
    <>
      {/* <Watch />
      <AnimatedPhrase phrase={"Bem vindo a Fatec"} /> */}

      <ContadorPessoas />

    </>
  );
}

export default App;
