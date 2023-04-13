import { Box } from '@chakra-ui/react'
import AdminLayout from 'layouts/admin';

export default function Lojas() {
	return (
		<AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
				<h1>Lojas</h1>
      </Box>
		</AdminLayout>
	);
}
