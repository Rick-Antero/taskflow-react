import { useState } from "react";
import Layout from "../components/Layout";

function CreateTask({ tasks, setTasks }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("Pendente");

  function adicionarTarefa(e) {
    e.preventDefault();

    if (titulo.trim() === "") {
      alert("Digite um título para a tarefa.");
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      status
    };

    setTasks([...tasks, novaTarefa]);

    setTitulo("");
    setDescricao("");
    setStatus("Pendente");
  }

  return (
    <Layout>
      <h1>Nova Tarefa</h1>

      <div className="form-container">
        <form onSubmit={adicionarTarefa}>

          <input
            type="text"
            placeholder="Título da tarefa"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <textarea
            placeholder="Descrição da tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pendente">Pendente</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluída">Concluída</option>
          </select>

          <button
            type="submit"
            className="btn-save"
          >
            Salvar Tarefa
          </button>

        </form>
      </div>
    </Layout>
  );
}

export default CreateTask;