import "../CSS/style.css"

const Visor = ({ value, history }) => {
  return (
    <div className="visor">
      <input id="visor" value={value} placeholder="0" disabled />
      <h2 id="history">{history}</h2>
    </div>
  );
};

export default Visor;