import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function TaskDetails({ tasks }) {
  const { id } = useParams();

  const tarefa = tasks.find(
    (task) => task.id === Number(id)
  );

  if (!tarefa) {
    return (
      <Layout>
        <h1>Tarefa não encontrada</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Detalhes da Tarefa</h1>

      <div className="task-card">
        <h2>{tarefa.titulo}</h2>

        <p>
          <strong>Descrição:</strong>
        </p>

        <p>{tarefa.descricao || "Nenhuma descrição informada."}</p>

        <br />

        <p>
          <strong>Status:</strong> {tarefa.status}
        </p>

        <br />

        <p>
          <strong>ID:</strong> {tarefa.id}
        </p>
      </div>
    </Layout>
  );
}

export default TaskDetails;