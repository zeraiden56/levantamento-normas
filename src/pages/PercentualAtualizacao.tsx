import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getNormas } from "../server/gas";
import type { NormaRow } from "../types";
import Spinner from "../components/Spinner";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import {
  FileCheck,
  Clock,
  Percent,
  BookOpenCheck,
  BarChart3,
} from "lucide-react";

const COLORS = ["#10B981", "#EF4444"];
const ITEMS_PER_PAGE = 10;

const PercentualAtualizacao: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data = [], isLoading, error } = useQuery<NormaRow[], Error>({
    queryKey: ["normas"],
    queryFn: getNormas,
    staleTime: 5 * 60 * 1000,
  });

  const vigentes = data.filter((n) => (n.VIGÊNCIA ?? "").trim() !== "");
  const dentroPrazo = vigentes.filter((n) => {
    const pub = new Date(n["DATA DE PUBLICAÇÃO"]);
    const vig = new Date(n.VIGÊNCIA);
    return vig >= pub;
  });

  const percentual = vigentes.length > 0
    ? (dentroPrazo.length / vigentes.length) * 100
    : 0;

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginated = data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const chartData = [
    { name: "Dentro do prazo", value: dentroPrazo.length },
    { name: "Fora do prazo", value: vigentes.length - dentroPrazo.length },
  ];

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red-600 p-4">Erro: {error.message}</div>;

  return (
    <div className="p-6 space-y-8">
      {/* Ícone e Título */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-700 rounded-full p-4 mb-2">
          <BarChart3 className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Percentual de Atualização das Normas Internas
        </h1>
        <p className="text-sm text-gray-600">
          Diretoria Jurídica | Defensoria Pública do Estado de Mato Grosso
        </p>
      </div>

      {/* MÉTRICAS COM ÍCONES E SUBTÍTULOS */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="border rounded p-4 shadow flex flex-col gap-1">
          <div className="flex items-center gap-2 text-green-700">
            <FileCheck className="w-5 h-5" />
            <span className="text-sm font-semibold">Normas Vigentes</span>
          </div>
          <p className="text-2xl">{vigentes.length}</p>
          <p className="text-xs text-gray-500">Normas com vigência preenchida.</p>
        </div>

        <div className="border rounded p-4 shadow flex flex-col gap-1">
          <div className="flex items-center gap-2 text-green-700">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-semibold">Dentro do Prazo</span>
          </div>
          <p className="text-2xl">{dentroPrazo.length}</p>
          <p className="text-xs text-gray-500">Vigência posterior ou igual à publicação.</p>
        </div>

        <div className="border rounded p-4 shadow flex flex-col gap-1">
          <div className="flex items-center gap-2 text-green-700">
            <Percent className="w-5 h-5" />
            <span className="text-sm font-semibold">Percentual</span>
          </div>
          <p className="text-2xl font-bold">{percentual.toFixed(2)}%</p>
          <p className="text-xs text-gray-500">Cálculo: dentro do prazo ÷ vigentes × 100</p>
        </div>

        <div className="border rounded p-4 shadow flex flex-col gap-1">
          <div className="flex items-center gap-2 text-green-700">
            <BookOpenCheck className="w-5 h-5" />
            <span className="text-sm font-semibold">Normas Classificadas</span>
          </div>
          <p className="text-2xl">{vigentes.length}</p>
          <p className="text-xs text-gray-500">Total de normas com análise de vigência.</p>
        </div>
      </div>

      {/* GRÁFICO COM EXPLICAÇÃO */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <h2 className="text-lg font-bold">Distribuição</h2>
        <p className="text-sm text-gray-600">
          O gráfico representa a proporção entre normas com vigência válida e inválida
          com base nas datas de publicação e vigência. Normas sem vigência não são consideradas.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }: any) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {chartData.map((_: any, i: number) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* TABELA COM PAGINAÇÃO */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-1">Nº</th>
              <th className="px-2 py-1">Ano</th>
              <th className="px-2 py-1">Instrumento</th>
              <th className="px-2 py-1">Descrição</th>
              <th className="px-2 py-1">Publicação</th>
              <th className="px-2 py-1">Vigência</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((n, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-2 py-1">{n.NUMERAÇÃO}</td>
                <td className="px-2 py-1">{n.ANO}</td>
                <td className="px-2 py-1">{n["INSTRUMENTO NORMATIVO"]}</td>
                <td className="px-2 py-1">{n.DESCRIÇÃO}</td>
                <td className="px-2 py-1">{n["DATA DE PUBLICAÇÃO"]}</td>
                <td className="px-2 py-1">{n.VIGÊNCIA}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            ‹ Anterior
          </button>
          <span>Página {page} de {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Próxima ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default PercentualAtualizacao;
