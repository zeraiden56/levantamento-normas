import Inicio from './pages/Inicio';
import Metodologia from './pages/Metodologia';
import PlanoEstrategico from './pages/PlanoEstrategico';
import PercentualAtualizacao from './pages/PercentualAtualizacao';
import Elaboracao from './pages/Elaboracao';
import GrupoTrabalho from './pages/GrupoTrabalho';

export const routes = [
  { title: 'Início', url: '/', component: Inicio },
  { title: 'Metodologia', url: '/metodologia', component: Metodologia },
  { title: 'Plano Estratégico 2024-2027', url: '/plano-estrategico', component: PlanoEstrategico },
  { title: 'Percentual de Atualização das Normas Internas', url: '/percentual-atualizacao', component: PercentualAtualizacao },
  { title: 'Elaboração', url: '/elaboracao', component: Elaboracao },
  { title: 'Grupo de Trabalho', url: '/grupo-trabalho', component: GrupoTrabalho },
];
