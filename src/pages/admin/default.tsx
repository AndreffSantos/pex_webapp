import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'

// Custom components
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import { MdAttachMoney, } from 'react-icons/md'
import ComplexTable from 'views/admin/default/components/ComplexTable'
import { columnsData, columnsDataMedio, TableData } from 'views/admin/default/variables/columnsData'
import tableData from 'views/admin/default/variables/tableDataTypes.json'
import tableDataMedio from 'views/admin/default/variables/tableDataMedio.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import AdminLayout from 'layouts/admin'
import ProfitCard from 'components/card/ProfitCard'

export default function UserReports () {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <>
          <SimpleGrid columns={{ 'base': 1, 'md': 2, 'lg': 3, '2xl': 4 }} gap='10px' mb='10px'>

            <ProfitCard
              value={'R$ 312.321,00'}
              description='Receita total'
              value2={'R$ 67,20'}
              description2='Média por cliente'
              bgColor='#EC7A7A'
              height='310'
              width='380'
            />

            <ProfitCard 
              value={'R$ 74.421,00'}
              description='Lucro total'
              value2={'R$ 42,30'}
              description2='Média por cliente'
              bgColor='#7A85EC'
              height='310'
              width='380'           
            />

            <ProfitCard 
              value={'R$ 3,12'}
              description='Lucro por venda'
              value2={'R$ 12,40'}
              description2='Média por cliente'
              bgColor='#65D4AC'
              height='310'
              width='380'           
            />

          </SimpleGrid>

          <SimpleGrid columns={{ 'base': 1, 'md': 2, 'lg': 4, '2xl': 6 }} gap='10px' mb='10px'>
            <MiniStatistics
              name='Clientes ativos'
              value='3.312'
              percent='+2,6% (+12)'
            />

            <MiniStatistics
              name='Novos clientes'
              value='12'
              percent='+15,3% (+2)'
            />

            <MiniStatistics
              name='Clientes adicionados'
              value='42'
              percent='+42,6% (+8)'
            />

            <MiniStatistics
              name='LTV'
              value='R$ 142,32'
              percent='-22,6% (+R$ 12,20)'
            />

            <MiniStatistics
              name='Turnover'
              value='24,3%'
              percent='+42,6% (+3)'
            />

            <MiniStatistics
              name='Turnover recuperado'
              value='54,42%'
              percent='+32,6% (+6)'
            />
            
          </SimpleGrid>

          <SimpleGrid columns={{ 'base': 1, 'md': 2, 'lg': 3 }} gap='20px' mb='20px'>
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />    
              }
              name='Cotações realizadas'
              value='312.321'
              percent='+15,3% (+223)'
            />

            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />    
              }
              name='Vendas finalizadas'
              value='212.012'
              percent='+15,3% (+223)'
            />

            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />    
              }
              name='Cotações não concluídas'
              value='42.021'
              percent='+15,3% (+223)'
            />

            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />    
              }
              name='Cotações não respondidas'
              value='3.122 3%'
              percent='+15,3% (+223)'
            />
          </SimpleGrid>

          <SimpleGrid columns={{ 'base': 1, 'md': 2, '2xl': 3}} gap='20px' mb='20px'>
            <ComplexTable
              title='Planos'
              subTitle='4 categorias em uso'
              columnsData={columnsData}
              tableData={(tableDataComplex as unknown) as TableData[]}
            />

            <ComplexTable
              title='Categorias'
              subTitle='4 categorias em uso'
              columnsData={columnsDataMedio}
              tableData={(tableDataMedio as unknown) as TableData[]}
            />

            <ComplexTable
              title='Tipos de planos'
              subTitle='2 tipos em uso'
              columnsData={columnsDataMedio}
              tableData={(tableData as unknown) as TableData[]}
            />
            </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  )
}