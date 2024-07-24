import "./navbar.css";

export function Navbar({ handleOpenModal }) {
  return (
    <div className="navbar">
      <h1>Larica's</h1>
      <button onClick={handleOpenModal}>Cadastrar</button>
    </div>
  );
}

export default Navbar;
