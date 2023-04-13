import { Box } from '@chakra-ui/react'
import AdminLayout from 'layouts/admin'

export default function DataTables () {
  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <h1>Relatórios</h1>
      </Box>
    </AdminLayout>
  )
}
