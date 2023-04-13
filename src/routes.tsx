import { Icon } from '@chakra-ui/react'
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart,
  MdDashboard
} from 'react-icons/md'

// Admin Imports
import MainDashboard from 'pages/admin/default'
import Vendas from 'pages/admin/vendas'
import Clientes from 'pages/admin/clientes'
import DataTables from 'pages/admin/data-tables'
import RTL from 'pages/rtl/rtl-default'

// Auth Imports
import Lojas from 'pages/admin/lojas-parceiras'
import { IRoute } from 'types/navigation'

const routes: IRoute[] = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Vendas',
    layout: '/admin',
    path: '/vendas',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Vendas,
    secondary: true
  },
  {
    name: 'Relatórios',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: '/data-tables',
    component: DataTables
  },
  {
    name: 'Lojas Parceiras',
    layout: '/admin',
    path: '/lojas-parceiras',
    icon: <Icon as={MdDashboard} width='20px' height='20px' color='inherit' />,
    component: Lojas
  },
  {
    name: 'Clientes',
    layout: '/admin',
    path: '/clientes',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Clientes
  },
]

export default routes
