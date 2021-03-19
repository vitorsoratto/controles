import "./Square.css";
import Counter from "../Counter/Counter.js";

function Square() {
  return (
    <div className="Square">
      <div className="Square-header">
        <h3 className="Square-title">Titulo</h3>
        <p className="Square-desc">Descrição legal do quadrado</p>
      </div>
      <Counter />
    </div>
  );
}

export default Square;
