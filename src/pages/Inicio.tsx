import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  ChartPieIcon,
  InformationCircleIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

export default function Inicio() {
  return (
    <div className="p-6 space-y-8 bg-off-white min-h-screen">
      {/* Título e Ícone Central */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-700 rounded-full p-4 mb-2">
          <HomeIcon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Percentual de Atualização das Normas Internas
        </h1>
        <p className="text-sm text-gray-600">
          Diretoria Jurídica | Defensoria Pública do Estado de Mato Grosso
        </p>
      </div>

      {/* Contexto do Projeto */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Contexto do Projeto</h2>
        <p className="text-gray-700 leading-relaxed">
          Este sistema foi desenvolvido como ferramenta de apoio estratégico para monitorar
          a atualização normativa interna da DPE-MT, promovendo transparência,
          segurança jurídica e eficiência institucional. A metodologia integra
          conceitos do planejamento estratégico com a análise contínua de normas,
          possibilitando a visualização clara do percentual de atualização, bem como o
          acesso facilitado às resoluções publicadas.
        </p>
      </section>

      {/* Callout informativo */}
      <div className="flex max-w-prose items-start space-x-3 rounded-lg border-l-4 border-green-700 bg-white p-4 shadow-sm">
        <InformationCircleIcon className="h-6 w-6 flex-shrink-0 text-green-700" />
        <p className="text-gray-700">
          Navegue pelas seções abaixo para entender a metodologia utilizada e conhecer os projetos estratégicos da Diretoria Jurídica.
        </p>
      </div>

      {/* Navegação por cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/metodologia" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
          <BookOpenIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Metodologia</h2>
          <p className="text-gray-600">
            Conheça o modelo estratégico adotado e a metodologia baseada no Balanced Scorecard.
          </p>
        </Link>

        <Link to="/plano-estrategico" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
          <Squares2X2Icon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Plano Estratégico</h2>
          <p className="text-gray-600">
            Detalhamento das metas, indicadores e objetivos para o período de 2024 a 2027.
          </p>
        </Link>

        <Link to="/percentual-atualizacao" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
          <ChartPieIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Percentual de Atualização</h2>
          <p className="text-gray-600">
            Métrica de atualização normativa vigente segundo critérios estratégicos.
          </p>
        </Link>

        <Link to="/elaboracao" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
          <Cog6ToothIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Elaboração</h2>
          <p className="text-gray-600">
            Processo de construção das normas, critérios técnicos e padronização jurídica.
          </p>
        </Link>

        <Link to="/grupo-trabalho" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
          <UserGroupIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Grupo de Trabalho</h2>
          <p className="text-gray-600">
            Veja os integrantes responsáveis pela elaboração do Plano Estratégico.
          </p>
        </Link>
      </div>
    </div>
  );
}
