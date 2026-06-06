import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/tasks">
        Tarefas
      </Link>

      <Link to="/create-task">
        Nova Tarefa
      </Link>

      <Link to="/about">
        Sobre
      </Link>
    </nav>
  );
}

export default Navbar;