import { Link } from "react-router-dom";

function TaskCard({
  id,
  titulo,
  descricao,
  status,
  onDelete
}) {
  return (
    <div className="task-card">
      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <p className={
        status === "Concluída"
      ? "status-concluida"
      : status === "Pendente"
      ? "status-pendente"
      : "status-andamento"
  }
>
  Status: {status}
</p>

      <button
        className="btn-delete"
        onClick={onDelete}>
            Excluir</button>

      <Link to={`/edit-task/${id}`}>
  <button className="btn-edit">
  Editar
</button>
</Link>
      <Link to={`/task-details/${id}`}>
        <button className="btn-details">
              Detalhes</button>
      </Link>
    </div>
  );
}

export default TaskCard;