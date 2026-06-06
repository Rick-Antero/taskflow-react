import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <h1>TaskFlow</h1>

      <p>
        Organize suas tarefas, acompanhe o progresso das atividades
        e aumente sua produtividade de forma simples e eficiente.
      </p>

      <div className="home-card">
        <h2>Principais Funcionalidades</h2>

        <ul>
          <li>✅ Criar tarefas</li>
          <li>✅ Editar tarefas</li>
          <li>✅ Excluir tarefas</li>
          <li>✅ Acompanhar status</li>
          <li>✅ Visualizar detalhes</li>
          <li>✅ Armazenamento local</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Home;