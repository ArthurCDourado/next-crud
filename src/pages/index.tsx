import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('1', 'Ana', 34),
    new Cliente('2', 'Arthur', 28),
    new Cliente('3', 'Carlos', 12),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
    
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome + ' excluído (a)');
  }

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r 
    from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
