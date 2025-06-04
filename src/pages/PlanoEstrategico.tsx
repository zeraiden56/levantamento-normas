import React from "react";
import {
  DocumentArrowDownIcon,
  GlobeAltIcon,
  IdentificationIcon,
  LightBulbIcon,
  ChartPieIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PlanoEstrategico: React.FC = () => {
  return (
    <div className="p-6 bg-off-white min-h-screen space-y-10">
      {/* Ícone e Título */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-700 rounded-full p-4 mb-2">
          <TagIcon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Plano Estratégico 2024–2027</h1>
        <p className="text-sm text-gray-600">
          Diretoria Jurídica | Defensoria Pública do Estado de Mato Grosso
        </p>
      </div>

      {/* Botão de acesso ao PDF */}
      <div className="max-w-5xl mx-auto text-right">
        <a
          href="https://www.defensoria.mt.def.br/dpmt/conteudo/PLANO_ESTRATEGICO_2024_202720250429232233.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded shadow"
        >
          <DocumentArrowDownIcon className="h-5 w-5" />
          Acessar Plano Estratégico (PDF)
        </a>
      </div>

      {/* Card: Atuação da Diretoria Jurídica */}
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ChartPieIcon className="h-5 w-5 text-green-700" />
            Atuação da Diretoria Jurídica
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-4">
          <p>
            A Diretoria Jurídica da DPE-MT está estrategicamente inserida no Plano
            Estratégico 2024–2027, especialmente no eixo 2: <strong>Governança, Transparência e Inovação</strong>.
          </p>
          <p>
            Sua atuação visa fortalecer a segurança jurídica e institucional por meio de
            projetos focados na padronização normativa, revisão legal e suporte técnico às
            áreas administrativas e finalísticas da instituição.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Revisão normativa:</strong> consolidação e atualização das normas internas da Defensoria.
            </li>
            <li>
              <strong>Boas práticas jurídicas:</strong> desenvolvimento de pareceres-modelo, formulários e fluxogramas de processos.
            </li>
            <li>
              <strong>Adequação à LGPD:</strong> orientação e apoio na conformidade jurídica com a Lei Geral de Proteção de Dados.
            </li>
          </ul>
          <p>
            Além disso, a Diretoria Jurídica é responsável pela medição do indicador estratégico
            <strong> “Percentual de Atualização das Normas Internas”</strong>, conforme previsto na Tabela de Indicadores Estratégicos
            do procedimento <strong>SEI nº 2025.0.000008436-0</strong>. A fórmula aplicada será:
          </p>
          <div className="bg-green-100 text-green-900 px-4 py-2 rounded text-sm shadow">
            <strong>Fórmula:</strong><br />
            ( Nº normas dentro do prazo / Nº total de normas vigentes ) × 100
          </div>
          <p>
            Essa medição visa garantir maior controle, transparência e atualização contínua
            da base normativa da DPE-MT.
          </p>
        </CardContent>
      </Card>

      {/* Card: Compromisso com os ODS */}
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <GlobeAltIcon className="h-5 w-5 text-green-700" />
            Compromisso com os Objetivos de Desenvolvimento Sustentável
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-3">
          <p>
            As ações da DPEMT estão alinhadas a 3 dos 17 ODS da ONU, reforçando seu
            compromisso com a equidade social, o acesso à justiça e a promoção da igualdade:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>ODS 5:</strong> Igualdade de Gênero</li>
            <li><strong>ODS 10:</strong> Redução das Desigualdades</li>
            <li><strong>ODS 16:</strong> Paz, Justiça e Instituições Eficazes</li>
          </ul>
        </CardContent>
      </Card>

      {/* Card: Identidade Institucional */}
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <IdentificationIcon className="h-5 w-5 text-green-700" />
            Identidade Institucional
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-6">
          <div>
            <h3 className="font-semibold">Negócio</h3>
            <p>
              Assistência jurídica, participação democrática e defesa dos direitos
              humanos, cidadania e prerrogativas institucionais da DPE.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Missão</h3>
            <p>
              Garantir orientação jurídica e defesa dos direitos de pessoas em
              situação de vulnerabilidade, com gratuidade, qualidade e humanização.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Visão</h3>
            <p>
              Ser referência na promoção dos direitos humanos e redução das
              desigualdades, com excelência no atendimento.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Valores</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Foco nos usuários</li>
              <li>Ética, transparência e accountability</li>
              <li>Atendimento humanizado e acessível</li>
              <li>Inovação e gestão participativa</li>
              <li>Desenvolvimento contínuo de pessoas</li>
              <li>Liderança e cultura organizacional forte</li>
              <li>Resolução extrajudicial de conflitos</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Card: Mapa estratégico */}
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <LightBulbIcon className="h-5 w-5 text-green-700" />
            Mapa Estratégico 2024–2027
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-2">
          <p>
            O mapa estratégico organiza as ações da instituição em cinco perspectivas:
            sociedade, processos internos, tecnologia, pessoas e orçamento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-green-700">Sociedade e Instituições</h4>
              <ul className="list-disc pl-4">
                <li>Humanização do atendimento</li>
                <li>Promoção da imagem institucional</li>
                <li>Colaboração com parceiros públicos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">Processos Internos</h4>
              <ul className="list-disc pl-4">
                <li>Eficiência na gestão</li>
                <li>Monitoramento de desempenho</li>
                <li>Alinhamento à nova estrutura funcional</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">Tecnologia e Infraestrutura</h4>
              <ul className="list-disc pl-4">
                <li>Transformação digital</li>
                <li>Expansão de presença física</li>
                <li>Ambientes adequados</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">Pessoas e Aprendizado</h4>
              <ul className="list-disc pl-4">
                <li>Liderança e cultura de resultados</li>
                <li>Diversidade e bem-estar</li>
                <li>Inclusão nas relações de trabalho</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">Orçamento e Finanças</h4>
              <ul className="list-disc pl-4">
                <li>Planejamento eficiente</li>
                <li>Melhoria na alocação de recursos</li>
                <li>Controle por centro de custo</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card: Visão geral do plano */}
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ChartPieIcon className="h-5 w-5 text-green-700" />
            Visão Geral do Plano Estratégico
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            O Plano Estratégico da Defensoria Pública de Mato Grosso estabelece metas
            e diretrizes institucionais para o período de 2024 a 2027. Ele está
            estruturado em quatro eixos de atuação: excelência no atendimento,
            valorização das pessoas, modernização da gestão e ampliação da transparência.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Eixo 1:</strong> Acesso à Justiça e Fortalecimento Institucional</li>
            <li><strong>Eixo 2:</strong> Governança, Transparência e Inovação</li>
            <li><strong>Eixo 3:</strong> Valorização das Pessoas</li>
            <li><strong>Eixo 4:</strong> Gestão de Resultados e Sustentabilidade</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanoEstrategico;
