import React from "react";
import {
  UserGroupIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";

const membros = [
  { nome: "Fábio Barbosa", cargo: "Defensor Público" },
  { nome: "Gisele Chimatti Berna", cargo: "Defensora Pública" },
  { nome: "Janaina Yumi Osaki", cargo: "Defensora Pública" },
  { nome: "João Vicente Nunes Leal", cargo: "Defensor Público" },
  { nome: "Marcos Rondon Silva", cargo: "Defensor Público" },
  { nome: "Nelson Gonçalves de Souza", cargo: "Defensor Público" },
  { nome: "Paulo Roberto da Silva Marquezini", cargo: "Defensor Público" },
  { nome: "Rafael Rodrigues Pereira Cardoso", cargo: "Defensor Público" },
  { nome: "Túlio Ponte de Almeida", cargo: "Defensor Público" },
  { nome: "Jacqueline Bittencourt Marques", cargo: "Analista-Advogada" },
  { nome: "Francisca Lia Girão Santos", cargo: "Analista-Economista" },
  { nome: "Patrício Alves Costa", cargo: "Analista-Economista" },
  { nome: "João Victor Ferreira", cargo: "Técnico Administrativo" },
  { nome: "Luiz Eduardo de Almeida Rodrigues", cargo: "Técnico Administrativo" },
];

const GrupoTrabalho: React.FC = () => {
  return (
    <div className="p-6 bg-off-white min-h-screen space-y-10">
      {/* Ícone e Título institucional */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-700 rounded-full p-4 mb-2">
          <UserGroupIcon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Grupo de Trabalho Responsável</h1>
        <p className="text-sm text-gray-600">
          Composição oficial do GT de elaboração do Plano Estratégico
        </p>
      </div>

      {/* Card: Introdução */}  
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <DocumentCheckIcon className="h-5 w-5 text-green-700" />
            Designação Oficial
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-4">
          <p>
            A Defensora Pública Geral do Estado de Mato Grosso, no uso de suas atribuições
            legais, designou por meio de portaria os seguintes defensores e servidores
            públicos para integrarem o Grupo de Trabalho responsável pela elaboração
            do Plano Estratégico no âmbito da Defensoria Pública de Mato Grosso
            para os próximos anos.
          </p>
        </CardContent>
      </Card>

      {/* Card: Lista de Membros */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg">Membros do Grupo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-2">Nome</th>
                  <th className="text-left px-4 py-2">Cargo</th>
                </tr>
              </thead>
              <tbody>
                {membros.map((m, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{m.nome}</td>
                    <td className="px-4 py-2">{m.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Botão: Portaria oficial */}
      <div className="max-w-4xl mx-auto text-right">
        <a
          href="https://www.iomat.mt.gov.br/portal/visualizacoes/html/17321/#e:17321/#m:1465289"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm px-5 py-2 rounded shadow"
        >
          Consultar Portaria Oficial
        </a>
      </div>
    </div>
  );
};

export default GrupoTrabalho;
