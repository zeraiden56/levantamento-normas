import React from "react";
import {
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  CalculatorIcon,
  ChartBarIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";

export default function Metodologia() {
  return (
    <div className="p-6 bg-off-white min-h-screen space-y-10">
      {/* Ícone e Título institucional */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-700 rounded-full p-4 mb-2">
          <ClipboardDocumentCheckIcon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Metodologia de Monitoramento</h1>
        <p className="text-sm text-gray-600">
          Diretoria Jurídica | Defensoria Pública do Estado de Mato Grosso
        </p>
      </div>

      {/* Card: Fundamentação Estratégica */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ScaleIcon className="h-5 w-5 text-green-700" />
            Fundamentação Estratégica
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-4">
          <p>
            A Diretoria Jurídica da DPE-MT desenvolveu uma metodologia própria para mensurar
            o percentual de atualização normativa interna, conforme previsto na Tabela de
            Indicadores Estratégicos, instituída no procedimento SEI n° <strong>2025.0.000008436-0</strong>.
            A iniciativa está alinhada ao Plano Estratégico 2024–2027 e visa garantir a
            efetividade da gestão normativa, promovendo transparência e atualização contínua.
          </p>
        </CardContent>
      </Card>

      {/* Card: Etapas da Metodologia */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ChartBarIcon className="h-5 w-5 text-green-700" />
            Etapas da Metodologia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>
              <strong>Mapeamento das normas vigentes:</strong> levantamento de resoluções ativas no período.
            </li>
            <li>
              <strong>Classificação dos prazos:</strong> identificação de vigências expiradas, prazos críticos ou atualizados.
            </li>
            <li>
              <strong>Aplicação da fórmula:</strong> cálculo com base no índice de normas atualizadas.
            </li>
            <li>
              <strong>Visualização:</strong> dashboards e relatórios temáticos baseados em filtros por ano, tipo e status.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Card: Fórmula do Indicador */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CalculatorIcon className="h-5 w-5 text-green-700" />
            Fórmula do Indicador
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-2">
          <p>
            A fórmula utilizada para medir o <strong>Percentual de Atualização das Normas Internas</strong> é:
          </p>
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-md font-mono text-center text-lg">
            ( Nº normas dentro do prazo / Nº total de normas vigentes ) × 100
          </div>
          <p className="text-sm text-gray-600 italic mt-2">
            Apuração: Relatório AJS Anual – Diretoria Jurídica
          </p>
        </CardContent>
      </Card>

      {/* Card: Importância Estratégica */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ExclamationCircleIcon className="h-5 w-5 text-green-700" />
            Importância Estratégica
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-2">
          <p>
            Essa métrica permite acompanhar o grau de aderência normativa da instituição,
            identificar áreas com risco de desatualização e fortalecer o controle interno.
            Também contribui diretamente para os objetivos institucionais de governança
            e conformidade jurídica.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
