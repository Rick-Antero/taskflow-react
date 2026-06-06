import Layout from "../components/Layout";

function Dashboard({ tasks }) {
  const total = tasks.length;

  const pendentes = tasks.filter(
    (task) => task.status === "Pendente"
  ).length;

  const andamento = tasks.filter(
    (task) => task.status === "Em andamento"
  ).length;

  const concluidas = tasks.filter(
    (task) => task.status === "Concluída"
  ).length;

  return (
    <Layout>
      <h1>Dashboard</h1>

      <div className="task-card">
        <h2>Total de tarefas</h2>
        <p>{total}</p>
      </div>

      <div className="task-card">
        <h2>Pendentes</h2>
        <p>{pendentes}</p>
      </div>

      <div className="task-card">
        <h2>Em andamento</h2>
        <p>{andamento}</p>
      </div>

      <div className="task-card">
        <h2>Concluídas</h2>
        <p>{concluidas}</p>
      </div>
    </Layout>
  );
}

export default Dashboard;