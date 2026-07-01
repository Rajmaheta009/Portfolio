import "./Loader.css";

function Loader() {
  return (
    <div className="loader">

      <h2>RAJ.OS</h2>

      <p>SYSTEM BOOTING...</p>

      <div className="progress">

        <div className="progress-fill"></div>

      </div>

      <span>Initializing AI Core...</span>

    </div>
  );
}

export default Loader;