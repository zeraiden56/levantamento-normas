import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// Simula as rotas buscáveis
const pages = [
  {
    title: "Metodologia",
    text: "modelo estratégico balanced scorecard normas mapeamento indicadores",
    path: "/metodologia",
  },
  {
    title: "Plano Estratégico",
    text: "metas objetivos governança inovação ods estratégia visão missão",
    path: "/plano-estrategico",
  },
  {
    title: "Grupo de Trabalho",
    text: "defensores membros plano estratégico portaria grupo de trabalho",
    path: "/grupo-trabalho",
  },
  {
    title: "Elaboração",
    text: "colaboradores organização levantamento jurídico revisão",
    path: "/elaboracao",
  },
  {
    title: "Percentual de Atualização",
    text: "análise vigência publicação cálculo percentual normas atualizadas",
    path: "/percentual-atualizacao",
  },
];

function normalize(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

type HeaderProps = {
  onOpenSidebar: () => void;
};

export default function Header({ onOpenSidebar }: HeaderProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchTerms = normalize(query).split(/\s+/).filter(Boolean);
  const results =
    query.length > 1
      ? pages.filter((page) =>
          searchTerms.every((term) =>
            normalize(page.text).includes(term)
          )
        )
      : [];

  return (
    <header className="relative flex items-center justify-between bg-green-800 text-white px-4 md:px-6 py-4 shadow z-50">
      <button className="md:hidden mr-4" onClick={onOpenSidebar}>
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Buscar conteúdo..."
          className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b shadow text-black max-h-60 overflow-y-auto z-50">
            {results.map((result, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  navigate(result.path);
                  setQuery("");
                }}
              >
                {result.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="hidden md:block w-6" />
    </header>
  );
}
