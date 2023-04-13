import React from 'react'

// Chakra imports
import { Box, useColorModeValue } from '@chakra-ui/react'

// Assets
import AdminLayout from 'layouts/admin'

export default function Vendas () {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorBrand = useColorModeValue('brand.500', 'white')
  return (
    <AdminLayout>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        <h1>Vendas</h1>
      </Box>
    </AdminLayout>
  )
}
