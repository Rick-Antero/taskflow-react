import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <h1>Sobre o Projeto</h1>

      <div className="about-card">
        <p>
          O TaskFlow é um sistema de gerenciamento de tarefas
          desenvolvido como atividade acadêmica com o objetivo de
          aplicar conceitos de desenvolvimento front-end utilizando React.
        </p>

        <h2>Tecnologias Utilizadas</h2>

        <ul>
          <li>React</li>
          <li>React Router DOM</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>LocalStorage</li>
          <li>Vite</li>
        </ul>

        <h2>Funcionalidades</h2>

        <ul>
          <li>Cadastro de tarefas</li>
          <li>Edição de tarefas</li>
          <li>Exclusão de tarefas</li>
          <li>Visualização de detalhes</li>
          <li>Controle de status</li>
          <li>Armazenamento local de dados</li>
        </ul>

        <h2>Equipe de Desenvolvimento</h2>

        <ul>
          <li>Alice Ludovico</li>
          <li>João Pedro Tenório</li>
          <li>Luiz Ricardo</li>
          <li>Matheus Souza</li>
        </ul>

        <h2>Ano</h2>

        <p>2026</p>
      </div>
    </Layout>
  );
}

export default About;