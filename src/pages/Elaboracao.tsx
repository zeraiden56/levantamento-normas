import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const membros = [
  {
    nome: "Evaldo Duarte de Barros Sobrinho",
    funcao: "Diretor Jurídico",
    area: "Organização",
  },
  {
    nome: "Arthur Costa Dias",
    funcao: "Assessor Técnico",
    area: "Levantamentos e Diagramação",
  },
  {
    nome: "Alan Oliver de Almeida Soliz",
    funcao: "Coordenador Jurídico de Licitações",
    area: "Revisão e Pesquisa",
  },
  {
    nome: "Laísa Gonçalves Aquino Ferraz",
    funcao: "Coordenadora Jurídica de Contratos e Convênios",
    area: "Revisão e Pesquisa",
  },
  {
    nome: "Bruna Rondon Bertholdo Rainho Cunha",
    funcao: "Advogada",
    area: "Revisão e Pesquisa",
  },
  {
    nome: "Eluana Rodrigues Veloso",
    funcao: "Assessora Técnica",
    area: "Revisão e Pesquisa",
  },
  {
    nome: "Maria Júlia Freitas",
    funcao: "Estagiária de Direito",
    area: "Revisão e Pesquisa",
  },
];

const Elaboracao: React.FC = () => {
  return (
    <div className="p-8 bg-off-white min-h-screen space-y-10">
      {/* Ícone e Título institucional */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-700 rounded-full p-4 mb-2">
          <UserGroupIcon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Equipe de Elaboração</h1>
        <p className="text-sm text-gray-600">Composição técnica da Diretoria Jurídica</p>
      </div>

      {/* Bloco com os membros */}
      <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl border border-orange-300 shadow space-y-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">Diretoria Jurídica</h2>
          <p className="text-sm text-gray-600">
            Defensoria Pública do Estado de Mato Grosso
          </p>
        </div>

        {membros.map((m, i) => (
          <div key={i} className="border-t pt-4">
            <p className="text-sm text-gray-500">{m.area}</p>
            <p className="font-semibold text-gray-800">{m.nome}</p>
            <p className="text-sm text-gray-700">{m.funcao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elaboracao;
