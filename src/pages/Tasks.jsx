import Layout from "../components/Layout";
import TaskCard from "../components/TaskCard";

function Tasks({ tasks, removerTarefa }) {
  return (
    <Layout>
      <h1>Lista de Tarefas</h1>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskCard
            key={task.id}
            id={task.id}
            titulo={task.titulo}
            descricao={task.descricao}
            status={task.status}
            onDelete={() => {
              if (window.confirm("Deseja excluir esta tarefa?")) {
                removerTarefa(task.id);
    }
  }}
/>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Tasks;