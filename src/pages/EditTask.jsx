import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function EditTask({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const [titulo, setTitulo] = useState(tarefa.titulo);
  const [descricao, setDescricao] = useState(tarefa.descricao);
  const [status, setStatus] = useState(tarefa.status);

  function salvarAlteracoes(e) {
    e.preventDefault();

    const tarefasAtualizadas = tasks.map((task) =>
      task.id === Number(id)
        ? {
            ...task,
            titulo,
            descricao,
            status
          }
        : task
    );

    setTasks(tarefasAtualizadas);

    navigate("/tasks");
  }

  return (
    <Layout>
      <h1>Editar Tarefa</h1>

      <div className="form-container">
        <form onSubmit={salvarAlteracoes}>

          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pendente">
              Pendente
            </option>

            <option value="Em andamento">
              Em andamento
            </option>

            <option value="Concluída">
              Concluída
            </option>
          </select>

          <button
            type="submit"
            className="btn-save"
          >
            Salvar Alterações
          </button>

        </form>
      </div>
    </Layout>
  );
}

export default EditTask;