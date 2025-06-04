import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  BookOpenIcon,
  ChartPieIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const items = [
  { title: "Início", to: "/", icon: <HomeIcon className="h-6 w-6" /> },
  { title: "Metodologia", to: "/metodologia", icon: <BookOpenIcon className="h-6 w-6" /> },
  { title: "Percentual de Atualização", to: "/percentual-atualizacao", icon: <ChartPieIcon className="h-6 w-6" /> },
  { title: "Plano Estratégico", to: "/plano-estrategico", icon: <Squares2X2Icon className="h-6 w-6" /> },
  { title: "Grupo de Trabalho", to: "/grupo-trabalho", icon: <UserGroupIcon className="h-6 w-6" /> },
  { title: "Elaboração", to: "/elaboracao", icon: <Cog6ToothIcon className="h-6 w-6" /> },
];

type NavbarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Navbar({ open, onClose }: NavbarProps) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-green-900 text-white
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-200 ease-in-out
        md:relative md:translate-x-0
      `}
    >
      {/* === CABEÇALHO COM LOGO === */}
      <div className="relative px-6 py-8 flex flex-col items-center border-b border-green-800 text-center">
        <button
          className="absolute top-4 right-4 md:hidden text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src="https://www.defensoria.mt.def.br/dpmt/assets/images/Logo-branco.png"
          alt="Defensoria Pública MT"
          className="h-12 w-auto mb-3"
        />

        <h1 className="text-lg text-white font-bold">
          Percentual de Atualização das Normas Internas
        </h1>
        <p className="text-sm text-white opacity-75">Diretoria Jurídica</p>
      </div>

      {/* === MENU === */}
      <nav className="mt-6">
        {items.map(({ title, to, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 hover:bg-green-800 transition-colors ${
                isActive ? "bg-green-800 font-semibold" : "opacity-90"
              }`
            }
          >
            {icon}
            <span className="ml-3">{title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
